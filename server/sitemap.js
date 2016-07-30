/**
 * Created by awalpole on 24/04/2014.
 */

'use strict';

var sm = require('sitemap');
var fs = require('fs');
var Blog = require('./routes/models/blog_model');
var _ = require('underscore');
var tasks;
var url;
var sitemap;

function addProjects() {

  url = [];

  url.push({url: '/', changefreq: 'monthly', priority: 1.0});
  url.push({url: '/work-projects', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/work-projects/blinkbox', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/work-projects/thomson-reuters-japan', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/work-projects/uk-lawstudent', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/work-projects/kaplan', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/side-projects', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/side-projects/lightning', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/side-projects/pennybooks', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/side-projects/twttwt', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/about-me', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/contact-me', changefreq: 'monthly', priority: 0.7});
  url.push({url: '/blog/', changefreq: 'weekly', priority: 0.7});
  url.push({url: '/sitemap', changefreq: 'weekly', priority: 0.7});

  next(null, url);

}

function getDataBasePosts(url) {

  Blog.find(function(err, blogs) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (!err) {

      Object.keys(blogs).forEach(function(key) {

        var blogURl = '/blog/' + blogs[key].uniqueId + '/' + blogs[key].url;

        url.push({url: blogURl, changefreq: 'weekly', priority: 0.7});

      });

      var cats;

      var _sortCategoriesByPopularity = function(blogs) {

        var newArray = {};

        _.chain(blogs)
          .pluck('category')
          .filter(function(r) {
            return typeof r !== 'undefined';
          })
          .groupBy(function(list) {
            return list;
          })
          .each(function(list, iterator) {
            newArray[iterator] = _.size(list);
          });

        return Object.keys(newArray).sort(function(a, b) {
          return -(newArray[a] - newArray[b]);
        });

      };

      cats = _sortCategoriesByPopularity(blogs);

      Object.keys(cats).forEach(function(key) {

        var blogURl = '/category/' + cats[key].toLowerCase();

        url.push({url: blogURl, changefreq: 'weekly', priority: 0.5});

      });

      next(null, url);

    }

  });

}

function getOldBlogPosts(url) {

  fs.exists('./server/blogposts.json', function(exists) {

    if (exists) {

      fs.readFile('./server/blogposts.json', function(err, data) {

        if (err) {
          throw err;
        }

        var posts = JSON.parse(data);

        Object.keys(posts).forEach(function(key) {

          var blogURl = '/blog/' + posts[key].uniqueId + '/' + posts[key].url;

          url.push({url: blogURl, changefreq: 'monthly', priority: 0.7});

        });

        sitemap = sm.createSitemap({
          hostname: 'https://andywalpole.me',
          cacheTime: 600000,        // 600 sec - cache purge period
          urls: url
        });

      });

    }

  });

}

function createBlogLinks() {

  tasks = [
    addProjects,
    getDataBasePosts,
    getOldBlogPosts
  ];

  next();

}

function next(err, result) {
  if (err) {
    throw err;
  }

  var currentTask = tasks.shift();

  if (currentTask) {
    currentTask(result);
  }
}

createBlogLinks();

module.exports = function(app) {

  app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML(function(err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  });

};
