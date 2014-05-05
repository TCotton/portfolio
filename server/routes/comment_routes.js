/**
 * Created by awalpole on 30/04/2014.
 */

'use strict';

var Comments = require('./models/comment_model');
var moment = require('moment');

module.exports = function (app) {

  app.route('/api/comment/add').post(function (req, res) {

    Comments.create({

      name : req.body.name,
      email: req.body.email,
      url: req.body.url,
      message: req.body.messsage,
      blogId: req.body.blogId,
      published: false,
      publishedDate: moment().valueOf()

    }, function (err, blog) {

      if (err) {
        res.send(err);
      }

      if (blog) {
        res.json(blog);
      }

    });

  });





};
