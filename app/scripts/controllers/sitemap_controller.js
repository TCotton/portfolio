/**
 * Created by awalpole on 21/05/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var SitemapCtrl = function ($rootScope, $scope, $log, BlogDataService, $angularCacheFactory) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
      this.$scope.blogData = $angularCacheFactory.get('blogCache').get('allBlogPosts');
    }

    var _this = this;

    /** Take blog object from service ready to be used in the side bar lists
     **/
    BlogDataService.retrieveData().then(function (result) {

      // retrieve blog data to be used in the ng-repeat directive in the sidebar

      if(_.isObject(result.data.BlogPosts)) {

        _this.$scope.blogData = result.data.BlogPosts;

      }


    }, function (response) {

      _this.$log.warn('Error SitemapCtrl');
      _this.$log.warn(response);

    });

  };

  SitemapCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService', '$angularCacheFactory'];

  app.controller('SitemapCtrl', SitemapCtrl);

}());
