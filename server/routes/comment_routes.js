/**
 * Created by awalpole on 30/04/2014.
 */

'use strict';

var Comments = require('./models/comment_model');
var moment = require('moment');
var mail = require('nodemailer');
var transporter = mail.createTransport();

module.exports = function (app) {

  app.route('/api/comment/add').post(function (req, res) {

    Comments.create({

      name: req.body.name,
      email: req.body.email,
      url: req.body.url,
      message: req.body.message,
      blogId: req.body.blogId,
      published: false,
      publishedDate: moment().valueOf()

    }, function (err, comment) {

      if (err) {
        res.send(err);
      }

      // send email on successful blog comment
      if (comment) {

        var message = 'Name: ' + req.body.name + '\n' +
          'Url: ' + req.body.url + '\n' +
          'Message: ' + req.body.message + '\n';

        transporter.sendMail({
          from: 'admin@andywalpole.me', // sender address
          to: 'me@andywalpole.me', // list of receivers
          subject: 'New comment on website', // Subject line
          text: message, // plaintext body
          html: message // html body
        });

        res.json(comment);

      }

    });

  });

  app.route('/api/comment/update').put(function (req, res) {

    Comments.findById(req.body.id, function (err, cm) {

      if (err) {
        res.send(err);
      }

      if (!cm) {

        return new Error('Could not load Comment document');

      } else {

        // update here
        /* cm.name = req.body.name;
         cm.email = req.body.email;
         cm.url = req.body.url;
         cm.message = req.body.message;
         cm.blogId = req.body.blogId;*/
        cm.published = req.body.published;

        cm.save(function (err) {

          if (err) {
            res.send(err);
          } else {
            res.json('Success');
          }

        });

      }

    });

  });


  app.route('/api/comment/get').get(function (req, res) {

    // use mongoose to get all blogs in the database
    Comments.find(function (err, comments) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(comments);

    });

  });

  app.route('/api/comment/getPublished').get(function (req, res) {

    // use mongoose to get all blogs in the database that are published and with the right blog id
    Comments.find({published: true, blogId: req.query.blogId }, function (err, comments) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(comments);

    });

  });


  app.route('/api/comment/delete/:id').delete(function (req, res) {

    Comments.remove({

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


};
