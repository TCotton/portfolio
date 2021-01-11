/**
 * Created by andywalpole on 19/04/2014.
 */
'use strict';
// set up ========================
//const spdy = require('spdy');
var express = require('express');
var http = require('http');
var errorHandler = require('express-error-handler');
http.globalAgent.maxSockets = Infinity;
var path = require('path');
var morgan = require('morgan');
var helmet = require('helmet');
//var csp = require('helmet-csp');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var app = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: 'log/main_log.log'})
  ]
});
//var cache = 31557600;
require('dotenv').config({ silent: (app.get('env') === 'production') });
var url = require('url');
var HttpsProxyAgent = require('https-proxy-agent');
var request = require('request');

var testEndpoint = 'https://ip.quotaguard.com';
var proxy = process.env.QUOTAGUARDSHIELD_URL;
var agent = new HttpsProxyAgent(proxy);
var options = {
  uri: url.parse(testEndpoint),
  agent
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('body: ', body);
  } else {
    console.log('error: ', error);
  }
}

request(options, callback);

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}).catch(error => logger.log('warning', 'DB error' + error.toString()));	// connect to mongoDB database on modulus.io
mongoose.set('debug', true);
mongoose.connection.on('error', err => {
  logError(err);
});

//var conf = require('./server/config/prerender'); 			// load the prerender config

//app.use(require('prerender-node').set('prerenderToken', conf.prerender));

app.use(helmet.frameguard('deny'));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());

if (app.get('env') === 'production') {
  app.use(helmet.hsts({ maxAge: 31536000 }));
}

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); 						// log every request to the console
app.use(compress());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride()); 						// simulate DELETE and PUT
app.use(cookieParser());
app.use(errorHandler());

global.__base = __dirname + '/';

app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});
const cacheTime = 86400000 * 7;
/*
 * Development Settings
 */
if (app.get('env') === 'development') {

  app.use(express.static(__dirname + '/app', { maxAge: cacheTime }));
  // This will change in production since we'll be using the dist folder
  // This covers serving up the index page
  app.use(favicon(path.join(__dirname, 'app/favicon.ico')));
  app.use(express.static(path.join(__dirname, 'tmp'), { maxAge: cacheTime })); 		// set the static files location /public/img will be /img for users

  require('./server/rss')(app);

  app.get('/*', function (req, res, next) {

    if (!req.url.startsWith('/api/')) {
      res.sendFile(__dirname + '/app/index.html');
    }

    if (req.url.startsWith('/api/')) {
      next();
    }

  });

  app.all('*', function (req, res, next) {
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

  // Error Handling
  app.use(function (err, req, res, next) {
    if (err) {
      next(err);
    } else {
      next();
    }
  });

}

/**
 * redirect www to non-www domain
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function wwwRedirect(req, res, next) {
  if (req.headers.host.slice(0, 4) === 'www.') {
    let newHost = req.headers.host.slice(4);

    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  }
  next();
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

  app.set('trust proxy', true);
  app.use(wwwRedirect);

  app.use(favicon(path.join(__dirname, 'dist/favicon.ico')));

  app.use(express.static(__dirname + '/dist', { maxAge: cacheTime }));

  require('./server/rss')(app);

  app.get('/*', function (req, res, next) {

    if (!req.url.startsWith('/api/')) {
      res.sendFile(__dirname + '/dist/index.html');
    }

    if (req.url.startsWith('/api/')) {
      next();
    }

  });

  // set the static files location /public/img will be /img for users

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    if (err) {
      res.statusCode = (err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    } else {
      next();
    }
  });
}

// routes ======================================================================
require('./server/routes/user_routes')(app);
require('./server/routes/blog_routes')(app);
require('./server/routes/comment_routes')(app);
require('./server/routes/misc_routes')(app);
require('./server/routes/newsblurAPI')(app);

//RSS feed parsing
require('./server/parse_feed/parse_rss')(app);

// XML sitemap =================================================================
require('./server/sitemap')(app);

module.exports = app;

if (app.get('env') === 'production') {

	http.createServer(app).listen(app.get('port'), function () {
		console.log('Express server listening on port ' + app.get('port'));
	});

} else {

	http.createServer(app).listen(app.get('port'), function () {
		console.log('Express server listening on port ' + app.get('port'));
	});

}


