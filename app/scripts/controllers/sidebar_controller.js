/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var SidebarCtrl = function ($rootScope, $scope, $log, newBlogDataCache) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.newBlogDataCache = newBlogDataCache;

    if (this.newBlogDataCache.get('newBlogPosts')) {
      this.$scope.blogData = angular.extend(JSON.parse(localStorage.getItem('oldBlogPosts')), this.newBlogDataCache.get('newBlogPosts'));
    }

    /** Until I sort the backend server out inherit blog posts from the parent scope
     * **/
    this.$scope.$on('blog_posts', function(events, args){
      this.$scope.blogData = args;
    }.bind(this));

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'newBlogDataCache'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());