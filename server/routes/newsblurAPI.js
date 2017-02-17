/**
 * Created by awalpole on 22/05/2014.
 */

'use strict';

var newsblur = require('./../config/newsblur');
var http = require('http');
var querystring = require('querystring');
var q = require('q');
var fs = require('fs');
var _ = require('underscore');

/** Send authentication to newsblur API
 * **/
var req_authentication = function() {

  var data;
  var options;
  var req;
  var deferred = q.defer();

  data = querystring.stringify({
    username: newsblur.username,
    password: newsblur.password,
  });

  options = {
    hostname: 'www.newsblur.com',
    port: 80,
    path: '/api/login',
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data),
    }
  };

  req = http.request(options, function(res) {

    if (res.statusCode === 200 && res.headers['set-cookie']) {

      deferred.resolve(res.headers['set-cookie']);

    } else {

      deferred.reject(new Error('Permissions refused. Status code: ' + res.statusCode));

    }

  });

  req.on('error', function(e) {
    deferred.reject(new Error('problem with request: ' + e.message));
  });

  req.write(data);
  req.end();

  return deferred.promise;

};

/** Request the last starred items using the returned authenticated cookie is the header request
 * **/
var write_json_file = function(data) {

  var options;
  var req;
  var fileName = 'feeds_' + Date.now().toString();
  var deferred = q.defer();

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

  req = http.request(options, function(res) {

    var wstream;

    res.setEncoding('utf8');

    wstream = fs.createWriteStream('./server/newsblur_feed/' + fileName + '.json');

    res.pipe(wstream);

    res.on('end', function() {
      deferred.resolve(fileName);
    });

    // This is here in case any errors occur
    wstream.on('error', function(err) {
      deferred.reject(new Error(err));
    });

  });

  req.on('error', function(e) {
    deferred.reject(new Error('problem with request: ' + e.message));
  });

  req.end();

  return deferred.promise;

};

module.exports = function(app) {

  app.route('/api/newsblur/get').get(function(req, res) {

    fs.readdir('./server/newsblur_feed', function(err, file) {

      if (err) {
        res.send(err);
      }

      if (_.isEmpty(file)) {

        // if the directory doesn't have a file then create one and send the contents to the frontend

        req_authentication().then(function(data) {
          write_json_file(data).then(function(fileName) {

            if (fileName) {

              fs.readFile('./server/newsblur_feed/' + fileName + '.json', function(err, data) {

                if (err) {
                  throw err;
                }
                res.send(data);

              });

            }

          }).done();
        });

      } else {

        var hours24 = 86400000;
        // take the number from the json file name - this is the date it was created
        var fileAge = parseInt(file.toString().substring(file.toString().indexOf('_') + 1, file.toString().indexOf('.')), 10);
        var dateNow = parseInt(Date.now(), 10);

        if ((dateNow - fileAge) > hours24) {

          // if older than a day then delete the file and write a new one
          fs.unlink('./server/newsblur_feed/' + file.toString(), function(err) {

            if (err) {
              res.send(err);
            }

            req_authentication().then(function(data) {
              write_json_file(data).then(function(fileName) {

                if (fileName) {

                  let contents = fs.readFileSync('./server/newsblur_feed/' + fileName + '.json', 'utf8');
                  res.send(contents);

                }

              }).done();
            });

          });

        } else {

          // if fresher than one day take the contents of the file and send it to the frontend

          fs.readFile('./server/newsblur_feed/' + file, function(err, data) {

            if (err) {
              throw err;
            }
            res.send(data);

          });

        } // end if if ((dateNow - fileAge) > hours24) {

      }

    });

  });

};