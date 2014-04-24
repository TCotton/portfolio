/**
 * Created by awalpole on 24/04/2014.
 */

'use strict';

var sm = require('sitemap');

/* create sitemap below - needed for SEO purposes */

var sitemap = sm.createSitemap ({
  hostname: 'http://web.andywalpole.me',
  cacheTime: 600000,        // 600 sec - cache purge period
  urls: [
    { url: '/page-1/',  changefreq: 'daily', priority: 0.3 },
    { url: '/page-2/',  changefreq: 'monthly',  priority: 0.7 },
    { url: '/page-3/' }     // changefreq: 'weekly',  priority: 0.5
  ]
});

module.exports = function (app) {

  app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML( function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send( xml );
    });
  });

};
