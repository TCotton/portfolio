/**
 * Created by andywalpole on 19/04/2014.
 */
// set up ========================
var express = require('express');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port = 9000;

// configuration =================

mongoose.connect('mongodb://AndyW:revolution@novus.modulusmongo.net:27017/sOzes7an'); 	// connect to mongoDB database on modulus.io

app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/app')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 						// log every request to the console
app.use(bodyParser()); 							// pull information from html in POST
app.use(methodOverride()); 						// simulate DELETE and PUT


http.createServer(app).listen(app.get('port'), function() {

  console.log('Express listening on port ' + app.get('port'));

});





