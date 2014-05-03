/**
 * Created by awalpole on 24/04/2014.
 */

'use strict';

var sm = require('sitemap');
var fs = require('fs');

if (fs.existsSync('./server/blogposts.json')) {

  var createBlogLinks = function () {

    var data;
    var posts;
    var url;

    data = fs.readFileSync('./server/blogposts.json', 'utf8', function (err) {
      if (err) {
        console.log(err);
      }
    });

    posts = JSON.parse(data);

    url = [];

    url.push({url: '/#!/', changefreq: 'monthly', priority: 1.0});

    Object.keys(posts).forEach(function (key) {

      var blogURl = '/#!/blog/' + posts[key].uniqueId + '/' + posts[key].url;

      url.push({url: blogURl, changefreq: 'weekly', priority: 0.7});

    });

    return url;

  };

}

/* create sitemap below - needed for SEO purposes */

var sitemap = sm.createSitemap({
  hostname: 'http://web.andywalpole.me',
  cacheTime: 600000,        // 600 sec - cache purge period
  urls: createBlogLinks ? createBlogLinks() : null
});


module.exports = function (app) {

  app.get('/sitemap.xml', function (req, res) {
    sitemap.toXML(function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  });

};
