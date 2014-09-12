/**
 * Created by andywalpole on 01/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  /**
   * @description Blog home page
   * @param $scope
   * @param BlogDataService
   * @param $angularCacheFactory
   * @parame $filter
   * @param $rootScope
   * @constructor
   */
  var BlogCtrl = function ($scope, BlogDataService, $angularCacheFactory, $filter, $rootScope) {

    this.$scope = $scope;

    this.$scope.displayPosts = 5;

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {

      this.$scope.totalBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');

    } else {

      BlogDataService.retrieveData().then(function (result) {

        if (_.isObject(result.data.BlogPosts)) {

          this.$scope.totalBlogPosts = result.data.BlogPosts;

        }

      }.bind(this));

    }

    this.$scope.$watch('totalBlogPosts', function (newData) {

      if(newData !== null && document.location.href) {

        var prerender = $filter('orderBy')(this.$scope.totalBlogPosts, '-publishedDate');

        $rootScope.prerender = document.location.href + prerender[0].uniqueId + '/' + prerender[0].url;

      }

    }.bind(this));


  };

  BlogCtrl.$inject = ['$scope', 'BlogDataService', '$angularCacheFactory', '$filter', '$rootScope'];

  BlogCtrl.prototype.morePosts = function () {

    this.$scope.displayPosts = this.$scope.displayPosts + 10;

  };

  app.controller('BlogCtrl', BlogCtrl);

}());