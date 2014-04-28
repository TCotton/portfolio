/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var _SidebarCtrl = {};

  var SidebarCtrl = function ($rootScope, $scope, $log, BlogDataService, $angularCacheFactory) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    _SidebarCtrl.BlogDataService = BlogDataService;

    if ($angularCacheFactory.get('blogCache').get('newBlogPosts')) {
      this.$scope.blogData = angular.extend($angularCacheFactory.get('blogCache').get('oldBlogPosts'), $angularCacheFactory.get('blogCache').get('newBlogPosts'));
    }

    /** Take blog object from service ready to be used in the side bar lists
     **/
    _SidebarCtrl.BlogDataService.retreiveData().then(function (data) {

      // retrieve blog data to be used in the ng-repeat directive in the sidebar
      this.$scope.blogData = data.oldBlogPosts;

    }.bind(this), function (response) {

      this.$log.warn('Error SidebarCtrl');
      this.$log.warn(response);

    }.bind(this));

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService', '$angularCacheFactory'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());