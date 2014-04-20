/**
 * Created by awalpole on 20/04/2014.
 */

'use strict';

var Users = require('./models/user_model');
var hashing = require('../config/salt');
var crypto = require('crypto');

module.exports = function (app) {

  app.route('/api/users/')

    .post(function (req, res) {

      var hmac = crypto.createHmac('sha512', hashing.salt);

      // change to 'binary' if you want a binary digest
      hmac.setEncoding('hex');

      // write in the text that you want the hmac digest for
      hmac.write(req.body.password);

      // you can't read from the stream until you call end()
      hmac.end();

      // read out hmac digest
      var hash = hmac.read();

      // create a user with name and password hashed
      Users.create({

        name: req.body.name,
        password: hash

      }, function (err) {

        if (err) {
          res.send(err);
        }

      });
    }).get(function (req, res) {

      // use mongoose to get all users in the database
      Users.find(function (err, users) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
          res.send(err);
        }

        res.json(users); // return all users in JSON format

      });
    });


};
