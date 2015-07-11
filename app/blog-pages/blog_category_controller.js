/**
 * Created by awalpole on 30/08/2014.
 */

'use strict';
(function() {

  var app = angular.module('portfolioApp.blogPagesController');

  var _filterBlogPosts;
  /**
   * @description For displaying posts in their respective categories
   * @param $scope
   * @param $location
   * @param BlogDataFactory
   * @param $log
   * @param $angularCacheFactory
   * @param $rootScope
   * @param _
   * @constructor
   */
  var BlogCatController = function($scope, $location, BlogDataFactory, $log, $angularCacheFactory, $rootScope, _) {

    this.$scope = $scope;
    this.$location = $location;
    this.$log = $log;
    this.$rootScope = $rootScope;

    this.$scope.cats = {};
    this.$scope.cats.displayMore = false;
    this.$scope.cats.title = null;
    this.$scope.displayPosts = 10;
    this.$scope.blogPosts = null;

    var urlPath = this.$location.path();
    var category = urlPath.substring(urlPath.lastIndexOf('/') + 1, urlPath.length);

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {

      this.$scope.blogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');

    }
    else {

      // start loader spinner in loaderDirective

      this.$rootScope.loader = true;

      BlogDataFactory.retrieveData().then(function(result) {

        if (_.isObject(result.data.BlogPosts)) {

          // stop loader spinner in loaderDirective

          this.$rootScope.loader = false;
          this.$scope.blogPosts = result.data.BlogPosts;

        }

      }.bind(this));

    }
    /**
     * @function _filterBlogPosts
     * @description filter blog articles based on category
     * category is found using the $location object
     * @type {function(this:BlogCatController)|*|Function}
     * @private
     */
    _filterBlogPosts = function(blogs) {

      return _.chain(blogs)
        .filter(function(item) {

          if (_.isString(item.category) && item.category.toLowerCase() === category) {
            return item;
          }

        }).value();

    }.bind(this);

    this.$scope.$watch('blogPosts', function(newData) {

      if (newData !== null) {

        this.$scope.totalBlogPosts = _filterBlogPosts(newData);

        if (this.$scope.totalBlogPosts.length >= this.$scope.displayPosts) {

          this.$scope.cats.displayMore = true;

        }

        if (_.isEmpty(this.$scope.totalBlogPosts)) {
          // if empty send to 404 page
          // if not empty redirect to 404
          // TODO: move this server side
          this.$location.path('/#!/');

        }

        this.$rootScope.pageTitle = category + ' / blog unblock';
        this.$scope.cats.title = category;
        this.$scope.URLencoded = encodeURIComponent(this.$rootScope.currentPage);
        this.$rootScope.faceBookDescription = 'List page for ' + category + ' category on the blog of web developer, Andy walpole';

      }// end if(newData !== null) {

    }.bind(this));

  };

  BlogCatController.$inject = ['$scope', '$location', 'BlogDataFactory', '$log', '$angularCacheFactory', '$rootScope', '_'];

  BlogCatController.prototype.morePosts = function() {

    this.$scope.displayPosts = this.$scope.displayPosts + 10;

  };

  BlogCatController.prototype.srcsetImage = function(image) {

    var newImage;

    if (image.indexOf('stock-photo') !== -1) {

      var dot = image.lastIndexOf('.');

      newImage = '/' + image.slice(0, dot) + '-small' + image.slice(dot);

    }
    else {

      newImage = '/' + image;

    }

    return newImage;

  };

  app.controller('BlogCatController', BlogCatController);

}());
