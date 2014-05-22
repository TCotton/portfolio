/**
 * Created by awalpole on 22/05/2014.
 */

var newsblur = require('./../config/newsblur'); 			// load the database config
var http = require('http');
var querystring = require('querystring');

var data = querystring.stringify({
  username: newsblur.username,
  password: newsblur.password
});

module.exports = function () {

  var options = {
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

  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  console.log('data\n');
  req.end();

//https://www.newsblur.com/api/login
};
