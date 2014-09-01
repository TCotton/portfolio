/**
 * Created by awalpole on 30/08/2014.
 */


'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var _filterBlogPosts;

  var BlogCatController = function ($scope, $location, BlogDataService, $log, $angularCacheFactory, $rootScope) {

    this.$scope = $scope;
    this.$location = $location;
    this.$log = $log;
    this.$rootScope = $rootScope;

    this.$scope.cats = {};

    this.$scope.cats.displayMore = false;
    this.$scope.cats.title = null;

    var urlPath = this.$location.path();
    var category = urlPath.substring(urlPath.lastIndexOf('/') + 1, urlPath.length);

    var totalBlogPosts;

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
      totalBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');
    }

    this.$scope.displayPosts = 10;

    BlogDataService.retrieveData().then(function (result) {

      if (_.isObject(result.data.BlogPosts)) {

        totalBlogPosts = result.data.BlogPosts;

      }

    }.bind(this));

    /**
     * @function _filterBlogPosts
     * @description filter blog articles based on category
     * category is found using the $location object
     * @type {function(this:BlogCatController)|*|Function}
     * @private
     */

    _filterBlogPosts = function () {

      return _.chain(totalBlogPosts)
        .filter(function (item) {

          if (_.isString(item.category) && item.category.toLowerCase() === category) {
            return item;
          }

        }).value();

    }.bind(this);


    this.$scope.totalBlogPosts = _filterBlogPosts();

    this.$rootScope.pageTitle = category + ' / blog unblock';
    this.$scope.cats.title = category;
    this.$scope.URLencoded = encodeURIComponent(this.$rootScope.currentPage);
    this.$rootScope.faceBookDescription = 'List page for ' + category + ' category on the blog of web developer, Andy walpole';


    if (_.isEmpty(this.$scope.totalBlogPosts)) {
      // if empty send to 404 page

      // if not empty redirect to 404
      // TODO: move this server side
      this.$location.path('/#!/');

    }


    if (this.$scope.totalBlogPosts.length >= this.$scope.displayPosts) {

      this.$scope.cats.displayMore = true;

    }

  };

  BlogCatController.$inject = ['$scope', '$location', 'BlogDataService', '$log', '$angularCacheFactory', '$rootScope'];

  BlogCatController.prototype.morePosts = function () {

    this.$scope.displayPosts = this.$scope.displayPosts + 10;

  };

  app.controller('BlogCatController', BlogCatController);

}());