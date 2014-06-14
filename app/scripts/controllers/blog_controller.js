/**
 * Created by andywalpole on 01/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var BlogCtrl = function ($rootScope, $scope, $location, BlogDataService, $log, $timeout, $angularCacheFactory) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$location = $location;
    this.$log = $log;
    this.$timeout = $timeout;

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
      this.$scope.totalBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');
      this.$scope.totalArticles = $angularCacheFactory.get('blogCache').get('totalArticles');
    }

    this.$scope.returnObject = null;

    this.$scope.displayPosts = 10;

    BlogDataService.retrieveData().then(function (result) {

      if (_.isObject(result.data.BlogPosts)) {

        this.$scope.totalBlogPosts = result.data.BlogPosts;
        this.$scope.totalArticles = result.data.totalArticles;

      }

    }.bind(this));

  };

  BlogCtrl.$inject = ['$rootScope', '$scope', '$location', 'BlogDataService', '$log', '$timeout', '$angularCacheFactory'];

  BlogCtrl.prototype.morePosts = function () {

    this.$scope.displayPosts = this.$scope.displayPosts + 10;

  };

  app.controller('BlogCtrl', BlogCtrl);

}());