'use strict';

var RSS = require('rss');
var fs = require('fs');
var Blog = require('./routes/models/blog_model');
var _ = require('underscore');
var q = require('q');

module.exports = function(app) {

  var feedOptions = {
    title: 'blog unblock: The blog of web developer Andy Walpole',
    description: 'Covers JavaScript, CSS, HTML and some political and social commentary',
    language: 'en',
    site_url: 'https://andywalpole.me/#!/blog/',
    feed_url: 'https://andywalpole.me/rss.xml'
  };

  var feed = new RSS(feedOptions);

  /** loop through blogs in monogdb and create RSS friendly objects
   * **/
  var blogsDatabase = function() {

    var feedItems = {}, deferred, blogURl;

    deferred = q.defer();

    Blog.find(function(err, blogs) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (!err) {

        Object.keys(blogs).forEach(function(key) {

          blogURl = 'https://andywalpole.me/blog/' + blogs[key].uniqueId + '/' + blogs[key].url;

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

  var blogsFeed = function() {

    let feedItems = {};
    let deferred;
    let posts;
    let blogURl;

    deferred = q.defer();

    fs.exists('./server/blogposts.json', function(exists) {

      if (exists) {

        fs.readFile('./server/blogposts.json', function(err, data) {

          if (err) {
            deferred.reject(new Error(err));
          }

          posts = JSON.parse(data);

          Object.keys(posts).forEach(function(key) {

            blogURl = 'https://andywalpole.me/blog/' + posts[key].uniqueId + '/' + posts[key].url;

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

        });

      } else {
        deferred.reject(new Error('blogposts.json cannot be found'));
      }

    });

    return deferred.promise;

  };

  var buildData = function() {

    /** Use promise all to make sure that both functions return data
     * **/

    q.all([blogsDatabase(), blogsFeed()]).spread(function(a, b) {

      let x;
      let l;
      let feedItems;

      /** Join them with union function after using sortBy function to rearrange them in correct data order
       * **/

      feedItems = _.union(_.sortBy(a, function(o) {
        return o.date * -1;
      }), _.sortBy(b, function(o) {
        return !o.date;
      }));

      for (x = 0, l = feedItems.length; x !== l; x += 1) {
        feed.item(feedItems[x]);
      }

    });

  };

  buildData();

  app.get('/rss.xml', function(req, res) {

    res.header('Content-Type', 'application/xml');

    if (!_.isEmpty(feed.items)) {

      let xml = feed.xml();
      res.send(xml);

    }

  });

};
