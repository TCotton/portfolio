/**
 * Created by andywalpole on 01/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var BlogCtrl = function ($scope, BlogDataService, $angularCacheFactory) {

    this.$scope = $scope;

    this.$scope.displayPosts = 5;

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
      this.$scope.totalBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');
    }

    BlogDataService.retrieveData().then(function (result) {

      if (_.isObject(result.data.BlogPosts)) {

        this.$scope.totalBlogPosts = result.data.BlogPosts;

      }

    }.bind(this));

  };

  BlogCtrl.$inject = ['$scope', 'BlogDataService', '$angularCacheFactory'];

  BlogCtrl.prototype.morePosts = function () {

    this.$scope.displayPosts = this.$scope.displayPosts + 10;

  };

  app.controller('BlogCtrl', BlogCtrl);

}());