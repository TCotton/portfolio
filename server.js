/**
 * Created by andywalpole on 19/04/2014.
 */
// set up ========================
var express = require('express');
var http = require('http');
var path = require('path');
var util = require('util');
var zlib = require('zlib');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var app = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb

app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev')); 						// log every request to the console
app.use(compress());
app.use(bodyParser()); 							// pull information from html in POST
app.use(methodOverride()); 						// simulate DELETE and PUT

var oneDay = -86400000;

app.use(express.static(path.join(__dirname, 'app'), { maxAge: oneDay })); 		// set the static files location /public/img will be /img for users

var server = http.createServer(app);

// redirect http://codenimbus.com/2014/01/15/redirecting-www-domain-to-non-www-on-ghost/
/*server.get('*//*', function(req, res, next) {
  if (req.headers.host.match(/^www/) !== null ) {
    res.redirect(301, 'http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
});*/

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

