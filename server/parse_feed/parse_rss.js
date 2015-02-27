/**
 * Created by andywalpole on 26/02/15.
 */

'use strict';

var gfeed = require('google-feed-api');
var _ = require('underscore');
var q = require('q');
var Blog = require('../routes/models/blog_model');
var moment = require('moment');
var fs = require('fs');
var async = require('async');

var _sortOldBlogPosts;
var _totalArticlesCount;
var _seoFriendly;
var _addReviewImage;
var _newBlogPosts;
var _mergeBlogPosts;
var _closeBlogComments;
var _promise_with_array;
var _grab_old_blog_posts;

/** Simple getter setter cache class
 * **/
var BlogCacheClass = function (val) {

  var value = val;

  Object.defineProperty(this, 'cache', {
    get: function () {
      return value;
    },
    set: function (val) {
      value = val;
    }
  });

};

var OldBlogPosts = new BlogCacheClass();
var OldBlogPostTotal = new BlogCacheClass();

var createJSONFile = function () {

  if (OldBlogPosts.cache) {

    fs.writeFile('./server/blogposts.json', OldBlogPosts.cache, function (err) {
      if (err) {
        return console.log(err);
      }
    });

  }

};

var RSSClass = function () {

  /** Set defaults
   * Will come in handy to use later for getters setters or other requirements if needed
   * **/
  Object.defineProperty(this, 'blogs', {
    value: {}
  });
  Object.defineProperty(this, 'blogs.totalArticles', {
    value: null,
    writable: true
  });
  Object.defineProperty(this, 'blogs.BlogPosts', {
    value: null,
    writable: true
  });
  Object.defineProperty(this, 'totalNewArticles', {
    value: null,
    writable: true
  });

};


module.exports = function (app) {

  app.get('/api/oldBlog/get', function (req, res) {

    var OldBlogFeed = new RSSClass();

    Object.defineProperty(OldBlogFeed, 'RSSFeed', {
      value: req.query.RSSFeed
    });

    Object.defineProperty(OldBlogFeed, 'BLOG', {
      value: JSON.parse(req.query.BLOG)
    });

    createJSONFile();

    // if oldBlogPosts are in the cache then don't use the parseFeed method
    // just retrieve them from the cache
    if (OldBlogPosts.cache && OldBlogPostTotal.cache) {

      OldBlogFeed.blogItems(function (data) {

        res.json(data);

      });

    } else {

      OldBlogFeed.parseFeed(OldBlogFeed.RSSFeed, function (data) {

        res.json(data);

      });

    }
  });

};
