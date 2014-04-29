/**
 * Created by awalpole on 29/04/2014.
 */

/**
 * Created by awalpole on 05/04/2014.
 * TODO: move all this RSS sorting into the backend nodejs server
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');
  /** Declare enclosed scope function names
   * **/
  var _cache;


  var NewBlogDataService = function ($http, $q, CONFIG, $rootScope, FeedService, $timeout, $interval, $log, MongoBlogService, $angularCacheFactory) {

    /** angularjs stuff
     * **/
    this.$http = $http;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.$interval = $interval;
    this.$log = $log;

    this.CONFIG = CONFIG;
    this.FeedService = FeedService;
    this.MongoBlogService = MongoBlogService;
    this.$angularCacheFactory = $angularCacheFactory;

    this.totalArticles = this.$angularCacheFactory.get('blogCache').get('totalArticles') || null;
    this.totalNewArticles = this.$angularCacheFactory.get('blogCache').get('totalNewArticles') || null;
    this.newBlogPosts = this.$angularCacheFactory.get('blogCache').get('newBlogPosts') || null;
    this.oldBlogPosts = this.$angularCacheFactory.get('blogCache').get('oldBlogPosts') || null;
    this.oldBlogComplete = this.$angularCacheFactory.get('blogCache').get('oldBlogComplete') ? true : false;
    this.newBlogComplete = this.$angularCacheFactory.get('blogCache').get('newBlogComplete') ? true : false;


    /* cache the relevant data in either session or storage
     * **/
    _cache = function () {

      this.$angularCacheFactory.get('blogCache').put('totalNewArticles', this.totalNewArticles);
      this.$angularCacheFactory.get('blogCache').put('newBlogPosts', this.totalNewArticles);
      this.$angularCacheFactory.get('blogCache').put('newBlogComplete', 'true');
      this.$angularCacheFactory.get('blogCache').put('oldBlogPosts', this.oldBlogPosts);
      this.$angularCacheFactory.get('blogCache').put('oldBlogComplete', 'true');
      this.$angularCacheFactory.get('blogCache').put('totalOldArticles', this.totalOldArticles);
      this.$angularCacheFactory.get('blogCache').put('totalArticles', this.totalArticles);

    }.bind(this);

  };


  NewBlogDataService.$inject = ['$http', '$q', 'CONFIG', '$rootScope', 'FeedService', '$timeout', '$interval', '$log', 'MongoBlogService', '$angularCacheFactory'];

  NewBlogDataService.prototype.retrieveData = function () {

    var deferred = this.$q.defer();

    this.$angularCacheFactory.get('blogCache').removeAll();

    // use a a cache means that it is possible to bypass the above methods and just serve up the data
    if (!this.$angularCacheFactory.get('blogCache').get('oldBlogPosts') || !this.$angularCacheFactory.get('blogCache').get('newBlogPosts')) {

      this.MongoBlogService.getOldBlogPosts().then(function (value) {

        deferred.resolve(value);

      });

    }

    return deferred.promise;

  };

  app.service('NewBlogDataService', NewBlogDataService);

}());
