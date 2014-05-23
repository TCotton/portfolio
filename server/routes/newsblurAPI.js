/**
 * Created by awalpole on 22/05/2014.
 */

var newsblur = require('./../config/newsblur');
var http = require('http');
var querystring = require('querystring');
var q = require('q');
var fs = require('fs');

module.exports = function () {

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

  var write_json_file = function(data) {

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

      wstream = fs.createWriteStream('./server/' + fileName + '.json');

      res.pipe(wstream);

      res.on('end', function () {
        console.log('here');
      });

      // This is here incase any errors occur
      wstream.on('error', function (err) {
        console.log(err);
      });

    });

    req.on('error', function (e) {
      console.log('problem with request: ' + e.message);
    });

    req.end();


  };

  req_authentication().then(function (data) {

    if (data) {

      write_json_file();

    }

  }).done();

};
