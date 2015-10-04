/**
 * Created by awalpole on 30/04/2014.
 */

'use strict';

var hashing = require('../config/salt');
var userId = require('../config/user_id');
var crypto = require('crypto');
var Users = require('./models/user_model');

function createPasswordHash(password) {

  var hmac = crypto.createHmac('sha512', hashing.salt);

  // change to 'binary' if you want a binary digest
  hmac.setEncoding('hex');

  // write in the text that you want the hmac digest for
  hmac.write(password);

  // you can't read from the stream until you call end()
  hmac.end();

  // read out hmac digest
  return hmac.read();

}

module.exports = function(app) {


  app.route('/api/users/add').post(function(req, res) {

    // read out hmac digest
    var hash = createPasswordHash(req.body.password);

    // create a user with name and password hashed
    Users.create({

      name: req.body.name,
      password: hash

    }, function(err, user) {

      if (err) {
        res.send(err);
      }

      if (user) {
        res.json(user);
      }

    });

  });


  app.route('/api/users/get').get(function(req, res) {

    // use mongoose to get all users in the database
    Users.find(function(err, users) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(users); // return all users in JSON format

    });
  });


  app.route('/api/users/delete/:id').delete(function(req, res) {

    Users.remove({

      _id: req.params.id

    }, function(err, users) {

      if (err) {
        res.send(err);
      }

      if (users) {
        res.json(users);
      }

    });

  });


  app.route('/api/user/find').post(function(req, res) {

    // read out hmac digest
    var hash = createPasswordHash(req.body.password);

    Users.findOne({name: req.body.name, password: hash}, function(err, usr) {

      if (err) {
        res.send(err);
      }

      // if successful a user id is returned
      // this is used as the value in the session cookie
      if (usr === null) {
        res.json(usr);
      } else {
        usr = userId.id;
        res.json(usr);
      }

    });

  });


  app.route('/api/user/update').put(function(req, res) {

    Users.findById(req.body.id, function(err, usr) {

      if (err) {
        res.send(err);
      }

      if (!usr) {
        return new Error('Could not load User document');
      } else {

        // read out hmac digest
        var hash = createPasswordHash(req.body.password);

        // update here
        usr.name = req.body.name;
        usr.password = hash;

        usr.save(function(err) {

          if (err) {
            res.send(err);
          } else {
            res.json('Success');
          }

        });

      }

    });

  });

};
