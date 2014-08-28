'use strict';

var RSS = require('rss');
var fs = require('fs');
var Blog = require('./routes/models/blog_model');
var _ = require('underscore');
var q = require('q');

module.exports = function (app) {

  var protocol;

  if (app.get('env') === 'development') {

    protocol = 'http';

  }

  if (app.get('env') === 'production') {

    protocol = 'https';

  }

  var feedOptions = {
    title: 'blog unblock: The blog of web developer Andy Walpole',
    description: 'Covers JavaScript, CSS, HTML and some political and social commentary',
    language: 'en',
    site_url: protocol + '://andywalpole.me/#!/blog/',
    feed_url: protocol + '://andywalpole.me/rss.xml'
  };

  var feed = new RSS(feedOptions);

  /** loop through blogs in monogdb and create RSS friendly objects
   * **/
  var blogs_database = function () {

    var feedItems = {}, deferred, blogURl;

    deferred = q.defer();

    Blog.find(function (err, blogs) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (!err) {

        Object.keys(blogs).forEach(function (key) {

          blogURl = protocol + '://andywalpole.me/#!/blog/' + blogs[key].uniqueId + '/' + blogs[key].url;

          feedItems[key] = {
            title: blogs[key].title,
            description: blogs[key].content,
            url: blogURl,
            guid: blogs[key].uniqueId,
            author: blogs[key].author,
            date: parseInt(blogs[key].publishedDate, 10)
          };

        });

        deferred.resolve(feedItems);

      }

    });

    return deferred.promise;

  };

  /** loop through blogs in json file and create RSS friendly objects
   * **/

  var blogs_feed = function () {

    var feedItems = {}, deferred, posts, data, blogURl;

    deferred = q.defer();

    if (fs.existsSync('./server/blogposts.json')) {

      data = fs.readFileSync('./server/blogposts.json', 'utf8', function (err) {

        if (err) {
          deferred.reject(new Error(err));
        }

      });

      posts = JSON.parse(data);

      Object.keys(posts).forEach(function (key) {

        blogURl = protocol + '://andywalpole.me/#!/blog/' + posts[key].uniqueId + '/' + posts[key].url;

        feedItems[key] = {
          title: posts[key].title,
          description: posts[key].content,
          url: blogURl,
          guid: posts[key].uniqueId,
          author: posts[key].author,
          date: parseInt(posts[key].publishedDate, 10)
        };

      });

      deferred.resolve(feedItems);

    }

    return deferred.promise;

  };

  var buildData = function () {

    /** Use promise all to make sure that both functions return data
     * **/

    q.all([blogs_database(), blogs_feed()]).spread(function (a, b) {

      var x, l, feedItems;

      /** Join them with union function after using sortBy function to rearrange them in correct data order
       * **/

      feedItems = _.union(_.sortBy(a, function (o) {
        return o.date * -1;
      }), _.sortBy(b, function (o) {
        return !o.date;
      }));

      for (x = 0, l = feedItems.length; x !== l; x += 1) {

        feed.item(feedItems[x]);

      }

    });

  };

  buildData();

  app.get('/rss.xml', function (req, res) {

    res.header('Content-Type', 'application/xml');

    if (!_.isEmpty(feed.items)) {

      var xml = feed.xml();

      res.send(xml);

    }

  });

};
