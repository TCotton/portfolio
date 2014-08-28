/**
 * Created by awalpole on 30/04/2014.
 */

'use strict';

var mail = require('nodemailer');
var transporter = mail.createTransport();

module.exports = function (app) {

  app.route('/api/sendmail').post(function (req, res) {

    var ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    var message = req.body.message + '<br>' + 'IP Address: '  + ipAddress;

    transporter.sendMail({
      from: req.body.name + ' ' + req.body.email, // sender address
      to: 'me@andywalpole.me', // list of receivers
      subject: 'Contact from portfolio', // Subject line
      text: message, // plaintext body
      html: message // html body
    });

    res.json({'success': 'true', 'message': 'Thank you for taking the time to fill out the form. I will contact you as soon as I can!'});

  });


};