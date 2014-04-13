/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var SidebarCtrl = function ($rootScope, $scope, $log, BlogDataService, localStorageService) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    console.log(localStorageService);

    if (localStorageService.get('oldBlogPosts')) {
      this.$scope.totalBlogPosts = angular.extend(localStorageService.get('oldBlogPosts'), JSON.parse(sessionStorage.getItem('totalNewArticles')));
    }

    /** Take blog object from service ready to be used in the side bar lists
     * **/
    BlogDataService.retreiveData().then(function (data) {

      // retrieve blog data to be used in the ng-repeat directive in the sidebar
      this.$scope.blogData = data.oldBlogPosts;

    }.bind(this), function (response) {

      this.$log.warn('Error SidebarCtrl');
      this.$log.warn(response);

    }.bind(this));

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService', 'localStorageService'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());