/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var SidebarCtrl = function ($rootScope, $scope, $log) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    if (sessionStorage.getItem('newBlogPosts')) {
      this.$scope.blogData = angular.extend(JSON.parse(localStorage.getItem('oldBlogPosts')), JSON.parse(sessionStorage.getItem('newBlogPosts')));
    }

    /** Until I sort the backend server out inherit blog posts from the parent scope
     * **/
    this.$scope.$on('blog_posts', function(events, args){
      this.$scope.blogData = args;
    }.bind(this));

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());