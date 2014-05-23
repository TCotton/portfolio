/**
 * Created by awalpole on 22/05/2014.
 */

var newsblur = require('./../config/newsblur');
var http = require('http');
var querystring = require('querystring');
var q = require('q');
var fs = require('fs');
var _ = require('underscore');

module.exports = function () {

  /** Send authentication to newsblur API
   * **/
  var req_authentication = function () {

    var data;
    var options;
    var req;
    var deferred = q.defer();

    data = querystring.stringify({
      username: newsblur.username,
      password: newsblur.password
    });

    options = {
      hostname: 'www.newsblur.com',
      port: 80,
      path: '/api/login',
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    req = http.request(options, function (res) {

      if (res.statusCode === 200 && res.headers['set-cookie']) {

        deferred.resolve(res.headers['set-cookie']);

      }

    });

    req.on('error', function (e) {
      console.log('problem with request: ' + e.message);
    });

    req.write(data);
    req.end();

    return deferred.promise;

  };

  /** Request the last starred items using the returned authenticated cookie is the header request
   * **/
  var write_json_file = function (data) {

    var options;
    var req;
    var fileName = 'feeds_' + Date.now().toString();

    options = {
      hostname: 'www.newsblur.com',
      port: 80,
      path: '/reader/starred_stories',
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13',
        'Cookie': data,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    req = http.request(options, function (res) {

      var wstream;

      res.setEncoding('utf8');

      wstream = fs.createWriteStream('./server/newsblur_feed/' + fileName + '.json');

      res.pipe(wstream);

      res.on('end', function () {
        console.log('here');
      });

      // This is here in case any errors occur
      wstream.on('error', function (err) {
        console.log(err);
      });

    });

    req.on('error', function (e) {
      console.log('problem with request: ' + e.message);
    });

    req.end();

  };

  /** Used if there is either no json file in the newsblur_feed directory
   *  Or the old file needs deleting and replacing if it has existed for longer than a day
   * **/
  var write_file_promise = function () {

    req_authentication().then(function (data) {

      if (data) {

        write_json_file(data);

      }

    }).done();

  };

  fs.readdir('./server/newsblur_feed', function (err, file) {

    if (err) {
      console.log(err);
    }

    if (_.isEmpty(file)) {

      write_file_promise();

    } else {

      var hours24 = 1;
      // take the number from the json file name - this is the date it was created
      var fileAge = parseInt(file.toString().substring(file.toString().indexOf('_') + 1, file.toString().indexOf('.')), 10);
      var dateNow = parseInt(Date.now(), 10);

      if ((dateNow - fileAge) > hours24) {

        // if older than a day then delete the file and write a new one
        fs.unlink('./server/newsblur_feed/' + file.toString(), function (err) {

          if (err) {
            console.log(err)
          }

          write_file_promise();

        });

      }

    }

  });

};
