/**
 * Created by awalpole on 30/04/2014.
 */

'use strict';

var mail = require('nodemailer').mail;

module.exports = function (app) {

  app.route('/api/sendmail').post(function (req, res) {

    mail({
      from: req.body.name + ' ' + req.body.email, // sender address
      to: 'me@andywalpole.me', // list of receivers
      subject: 'Contact from portfolio', // Subject line
      text: req.body.message, // plaintext body
      html: req.body.message // html body
    });

    res.json({'success': 'true', 'message': 'Thank you for taking the time to fill out the form. I will contact you as soon as I can!'});

  });


};