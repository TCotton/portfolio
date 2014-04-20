/**
 * Created by andywalpole on 19/04/2014.
 */
'use strict';
// set up ========================
var express = require('express');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var app = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb

var database = require('./server/config/database'); 			// load the database config

// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(morgan('dev')); 						// log every request to the console
app.use(compress());
app.use(bodyParser()); 							// pull information from html in POST
app.use(methodOverride()); 						// simulate DELETE and PUT
app.use(cookieParser());

/**
 * Development Settings
 */
if (app.get('env') === 'development') {
  // This will change in production since we'll be using the dist folder
  // This covers serving up the index page

  app.use(express.static(path.join(__dirname, 'app'))); 		// set the static files location /public/img will be /img for users

  // Error Handling
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

  var oneDay = 86400000;

  app.use(express.static(path.join(__dirname, 'dist'), { maxAge: oneDay })); 		// set the static files location /public/img will be /img for users

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

var server = http.createServer(app);

// routes ======================================================================
require('./server/routes/routes.js')(app);

// redirect http://codenimbus.com/2014/01/15/redirecting-www-domain-to-non-www-on-ghost/
app.get('', function(req, res, next) {
  if (req.headers.host.match(/^www/) !== null ) {
    res.redirect(301, 'http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
});

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

