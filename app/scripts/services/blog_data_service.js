/**
 * Created by awalpole on 29/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');
  /** Declare enclosed scope function names
   * **/
  var _cache;
  var _blogData;

  var BlogDataService = function ($http, $q, FeedService, $log, MongoBlogService, $angularCacheFactory) {

    /** angularjs stuff
     * **/
    this.$http = $http;
    this.$q = $q;
    this.$log = $log;

    this.MongoBlogService = MongoBlogService;
    this.$angularCacheFactory = $angularCacheFactory;

    /* cache the relevant data in either session or storage
     * **/
    _cache = function (blog) {

      this.$angularCacheFactory.get('blogCache').put('totalArticles', blog.data.totalArticles);
      this.$angularCacheFactory.get('blogCache').put('allBlogPosts', blog.data.BlogPosts);

    }.bind(this);

  };


  BlogDataService.$inject = ['$http', '$q', 'FeedService', '$log', 'MongoBlogService', '$angularCacheFactory'];

  BlogDataService.prototype.retrieveData = function () {

    var deferred = this.$q.defer();

    // use a a cache means that it is possible to bypass the above methods and just serve up the data
    if (!this.$angularCacheFactory.get('blogCache').get('allBlogPosts')) {

      this.MongoBlogService.getOldBlogPosts().then(function (value) {

        _blogData = value;
        _cache(value);

      }.bind(this), function () {}).then(function () {

        deferred.resolve(_blogData);

      });

    }

    return deferred.promise;

  };

  app.service('BlogDataService', BlogDataService);

}());
