/**
 * Created by awalpole on 30/04/2014.
 */

'use strict';
var fs = require('fs');
var dir = 'log';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
var postmarkapp = require('./../config/postmarkapp');
var postmark = require('postmark');
var client = new postmark.Client(postmarkapp.api);
var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: 'log/misc_routes.log'})
  ]
});

module.exports = function(app) {

  app.route('/api/sendmail').post(function(req, res) {

    var ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    var message = req.body.message + '<br>' + 'IP Address: ' + ipAddress + '<br>' + 'Sender email address: ' + req.body.email;

    client.sendEmail({
      'From': 'me@andywalpole.me',
      'To': 'me@andywalpole.me',
      'Subject': 'Contact from portfolio',
      'HtmlBody': message
    }, function(error) {
      if (error) {

        logger.log('info', 'Unable to send (content form notification) via postmark: ' + error.message);

        res.json({
          'success': 'true',
          'message': 'There has been a problem sending this email. The administrators have been informed'
        });
        return;
      }

      res.json({
        'success': 'true',
        'message': 'Thank you for taking the time to fill out the form. I will contact you as soon as I can!'
      });
    });

  });

};