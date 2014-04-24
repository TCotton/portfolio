/**
 * Created by awalpole on 20/04/2014.
 */

'use strict';

var Users = require('./models/user_model');
var Blog = require('./models/blog_model');
var hashing = require('../config/salt');
var userId = require('../config/user_id');
var crypto = require('crypto');
var mail = require('nodemailer').mail;

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

module.exports = function (app) {


  app.route('/api/users/add').post(function (req, res) {

    // read out hmac digest
    var hash = createPasswordHash(req.body.password);

    // create a user with name and password hashed
    Users.create({

      name: req.body.name,
      password: hash

    }, function (err, user) {

      if (err) {
        res.send(err);
      }

      if (user) {
        res.json(user);
      }

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

      if (blog) {
        res.json(blog);
      }

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

      _id: req.params.id

    }, function (err, users) {

      if (err) {
        res.send(err);
      }

      if (users) {
        res.json(users);
      }

    });

  });


  app.route('/api/blog/delete/:id').delete(function (req, res) {

    Blog.remove({

      _id: req.params.id

    }, function (err, blogs) {

      if (err) {
        res.send(err);
      }

      if (blogs) {
        res.json(blogs);
      }

    });

  });


  app.route('/api/blog/update').put(function (req, res) {

    Blog.findById(req.body.id, function (err, bl) {

      if (err) {
        res.send(err);
      }

      if (!bl) {

        return new Error('Could not load Blog document');

      } else {

        // update here
        bl.title = req.body.title;
        bl.author = req.body.author;
        bl.category = req.body.category;
        bl.content = req.body.content;
        bl.contentSnippet = req.body.contentSnippet;
        bl.url = req.body.url;
        bl.displayImage = req.body.displayImage;

        bl.save(function (err) {

          if (err) {
            res.send(err);
          } else {
            res.json('Success');
          }

        });

      }

    });

  });


  app.route('/api/user/update').put(function (req, res) {

    Users.findById(req.body.id, function (err, usr) {

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

        usr.save(function (err) {

          if (err) {
            res.send(err);
          } else {
            res.json('Success');
          }

        });

      }

    });

  });


  app.route('/api/user/find').post(function (req, res) {

    console.log(req.body);

    // read out hmac digest
    var hash = createPasswordHash(req.body.password);

    Users.findOne({ name: req.body.name, password: hash }, function (err, usr) {

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

  // redirect www to no www: http://codenimbus.com/2014/01/15/redirecting-www-domain-to-non-www-on-ghost/
  app.get('', function(req, res, next) {
    if (req.headers.host.match(/^www/) !== null ) {
      res.redirect(301, 'http://' + req.headers.host.replace(/^www\./, '') + req.url);
    } else {
      next();
    }
  });


  app.get('/#!/404', function(req, res){
    res.location('/404.html');
    res.redirect('/404.html');
  });


};
