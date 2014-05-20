'use strict';

var RSS = require('rss');
var fs = require('fs');
var Blog = require('./routes/models/blog_model');
var _ = require('underscore');

var feedOptions = {
  title: 'The blog of web developer Andy Walpole',
  description: 'Covers JavaScript, CSS, HTML and some political and social commentary',
  language: 'en',
  site_url: 'http://andywalpole.me/#!/blog/',
  feed_url: 'http://andywalpole.me/rss.xml'
};

var feed = new RSS(feedOptions);

var feedItems = [];


Blog.find(function (err, blogs) {

  // if there is an error retrieving, send the error. nothing after res.send(err) will execute
  if (!err) {

    Object.keys(blogs).forEach(function (key) {

      var blogURl = 'http://andywalpole.me/#!/blog/' + blogs[key].uniqueId + '/' + blogs[key].url;

      var feedObject = {
        title: blogs[key].title,
        description: blogs[key].content,
        url: blogURl,
        guid: blogs[key].uniqueId,
        author: blogs[key].author,
        date: parseInt(blogs[key].publishedDate, 10)
      };

      feed.item(feedObject);

    });

  }

});


if (fs.existsSync('./server/blogposts.json')) {

  var data = fs.readFileSync('./server/blogposts.json', 'utf8', function (err) {

    if (err) {
      console.log(err);
    }

  });

  var posts = JSON.parse(data);

  Object.keys(posts).forEach(function (key) {

    var blogURl = 'http://andywalpole.me/#!/blog/' + posts[key].uniqueId + '/' + posts[key].url;

    var feedObject = {
      title: posts[key].title,
      description: posts[key].content,
      url: blogURl,
      guid: posts[key].uniqueId,
      author: posts[key].author,
      date: parseInt(posts[key].publishedDate, 10)
    };

    feed.item(feedObject);

  });

}

module.exports = function (app) {

  app.get('/rss.xml', function (req, res) {

    res.header('Content-Type', 'application/xml');

    if (!_.isEmpty(feed.items)) {

      var xml = feed.xml();

      res.send(xml);

    }

  });

};
