/**
 * Created by awalpole on 29/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.services');
  /** Declare enclosed scope function names
   * **/
  var _cache;
  var _blogData;

  var BlogDataService = function ($http, $q, MongoBlogService, $angularCacheFactory, CONFIG) {

    /** angularjs stuff
     * **/
    this.$http = $http;
    this.$q = $q;
    this.$angularCacheFactory = $angularCacheFactory;

    /** Using defineProperty with these values prevents service and constants from being injected with the BlogDataService into a controller
     * **/
    Object.defineProperty(this, 'CONFIG', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: CONFIG
    });

    Object.defineProperty(this, 'MongoBlogService', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: MongoBlogService
    });

    /* cache the relevant data in either session or storage
     * **/
    _cache = function (blog) {

      this.$angularCacheFactory.get('blogCache').put('totalArticles', blog.data.totalArticles);
      this.$angularCacheFactory.get('blogCache').put('allBlogPosts', blog.data.BlogPosts);

    }.bind(this);

  };

  BlogDataService.$inject = ['$http', '$q', 'MongoBlogService', '$angularCacheFactory', 'CONFIG'];

  BlogDataService.prototype.retrieveData = function () {

    var deferred = this.$q.defer();

    // remove cache for debugging purposes

    if (this.$angularCacheFactory.get('authCache').get('logginIn')) {

      this.$angularCacheFactory.get('blogCache').removeAll();

    }

    // use a a cache means that it is possible to bypass the above methods and just serve up the data
    if (!this.$angularCacheFactory.get('blogCache').get('allBlogPosts')) {

      // through a POST service supply the RSS url and the images in the CONFIG.BLOG object to be added the individual blog post objects
      this.MongoBlogService.getOldBlogPosts({RSSFeed: this.CONFIG.RSS_FEED_LINK, BLOG: this.CONFIG.BLOG}).then(function (value) {

        _blogData = value;
        _cache(value);

      }, function () {
      }).then(function () {

        deferred.resolve(_blogData);

      });

    }

    return deferred.promise;

  };

  app.service('BlogDataService', BlogDataService);

}());
