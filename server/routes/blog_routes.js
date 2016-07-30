/**
 * Created by awalpole on 30/04/2014.
 */

'use strict';

var Blog = require('./models/blog_model');

module.exports = function(app) {

  app.route('/api/blog/add').post(function(req, res) {

    Blog.create({

      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      content: req.body.content,
      aside: req.body.aside,
      contentSnippet: req.body.contentSnippet,
      publishedDate: req.body.publishedDate,
      url: req.body.url,
      uniqueId: req.body.uniqueId,
      displayImage: req.body.displayImage,
      commentsOpen: req.body.allowComments

    }, function(err, blog) {

      if (err) {
        res.send(err);
      }

      if (blog) {
        res.json(blog);
      }

    });

  });


  app.route('/api/blog/get').get(function(req, res) {

    // use mongoose to get all blogs in the database
    Blog.find(function(err, blogs) {

      if (app.get('env') === 'production') {
        res.setHeader('Cache-Control', 'public, max-age=60');
      }

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(blogs); // return all users in JSON format

    });
  });

  app.route('/api/blog/delete/:id').delete(function(req, res) {

    Blog.remove({

      _id: req.params.id

    }, function(err, blogs) {

      if (err) {
        res.send(err);
      }

      if (blogs) {
        res.json(blogs);
      }

    });

  });

  app.route('/api/blog/update').put(function(req, res) {

    Blog.findById(req.body.id, function(err, bl) {

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
        bl.aside = req.body.aside;
        bl.contentSnippet = req.body.contentSnippet;
        bl.url = req.body.url;
        bl.displayImage = req.body.displayImage;
        bl.commentsOpen = req.body.allowComments;

        bl.save(function(err) {

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