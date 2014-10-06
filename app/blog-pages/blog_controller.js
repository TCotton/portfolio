/**
 * Created by andywalpole on 01/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.blogPagesController');

  /**
   * @description Blog home page
   * @param $scope
   * @param BlogDataFactory
   * @param $angularCacheFactory
   * @param _
   * @constructor
   */
  var BlogCtrl = function ($scope, BlogDataFactory, $angularCacheFactory, _) {

    this.$scope = $scope;

    this.$scope.displayPosts = 5;

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {

      this.$scope.totalBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');

    } else {

      BlogDataFactory.retrieveData().then(function (result) {

        if (_.isObject(result.data.BlogPosts)) {

          this.$scope.totalBlogPosts = result.data.BlogPosts;

        }

      }.bind(this));

    }

  };

  BlogCtrl.$inject = ['$scope', 'BlogDataFactory', '$angularCacheFactory', '_'];

  BlogCtrl.prototype.morePosts = function () {

    this.$scope.displayPosts = this.$scope.displayPosts + 10;

  };

  BlogCtrl.prototype.srcsetImage = function (image) {

    var newImage;

    if (image.indexOf('stock-photo') !== -1) {

      var dot = image.lastIndexOf('.');

      newImage = '/' + image.slice(0, dot) + '-small' + image.slice(dot);

    } else {

      newImage = '/' + image;

    }

    return newImage;

  };

  app.controller('BlogCtrl', BlogCtrl);

}());