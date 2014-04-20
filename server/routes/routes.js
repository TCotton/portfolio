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

      console.log(hash);

      // create a user with name and password hashed
      Users.create({

        text: req.body.name,
        password: hash

      }, function (err, users) {

        if (err) {
          res.send(err);
        }

        // get and return all the users after creating a new one
        Users.find(function (err, todos) {

          if (err) {
            res.send(err);
          }

          res.json(todos);

        });
      });
    }).get(function (req, res) {

      // use mongoose to get all todos in the database
      Users.find(function (err, users) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
          res.send(err);
        }

        res.json(users); // return all todos in JSON format

      });
    });


};
