/**
 * Created by awalpole on 20/04/2014.
 */

'use strict';

var Users = require('./models/user_model');
var Blog = require('./models/blog_model');
var hashing = require('../config/salt');
var crypto = require('crypto');

module.exports = function (app) {

  app.route('/api/users/add').post(function (req, res) {

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

    }, function (err, user) {

      if (err) {
        res.send(err);
      }

      // use mongoose to get all users in the database
      Users.find(function (err, users) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
          res.send(err);
        }

        res.json(users); // return all users in JSON format

      });

    });

  });


  app.route('/api/blog/add').post(function (req, res) {

    Blog.create({

      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      content: req.body.content,
      contentSnippet: req.body.contentSnippet,
      publishedDate: req.body.publishedDate,
      url: req.body.url,
      uniqueId: req.body.uniqueId,
      displayImage: req.body.displayImage

    }, function (err, blog) {

      if (err) {
        res.send(err);
      }

      // use mongoose to get all blogs in the database
      Blog.find(function (err, blogs) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
          res.send(err);
        }

        res.json(blogs); // return all users in JSON format

      });

    });

  });

  app.route('/api/users/get').get(function (req, res) {

    // use mongoose to get all users in the database
    Users.find(function (err, users) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(users); // return all users in JSON format

    });
  });

  app.route('/api/blog/get').get(function (req, res) {

    // use mongoose to get all blogs in the database
    Blog.find(function (err, blogs) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(blogs); // return all users in JSON format

    });
  });


  app.route('/api/users/delete/:id').delete(function (req, res) {

    Users.remove({

      _id : req.params.id

    }, function(err, users) {

      if (err) {
        res.send(err);
      }

      // get and return all the users after you delete one
      Users.find(function(err, users) {

        if (err) {
          res.send(err);
        }

        res.json(users);

      });

    });

  });

  app.route('/api/blog/update').post(function (req, res) {

    // update a blog post
    var update = Blog.update(
      {
        id: req.body.id
      },
      {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        content: req.body.content,
        contentSnippet: req.body.contentSnippet,
        publishedDate: req.body.publishedDate,
        url: req.body.url,
        uniqueId: req.body.uniqueId,
        displayImage: req.body.displayImage

      }, function (err) {

        if (err) {
          res.send(err);
        }

      });

    res.json(update);

  });


  app.route('/api/blog/delete/:id').delete(function (req, res) {

    console.log('delete user');

    //console.log(req);

    console.log(req.param);

    console.log(req.query);
    console.log(req.query._id);
    /*

     Blog.remove({

     _id: req.query._id

     }, function (err) {

     if (err) {
     res.send(err);
     }

     });
     */

  });


};
