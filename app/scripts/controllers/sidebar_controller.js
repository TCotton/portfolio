/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  /** Add, edit or delete blog posts
   * */

  var app = angular.module('portfolioApp');

  var SidebarCtrl = function ($rootScope, $scope, $log, FeedService) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    this.$scope.blogData = null;

    FeedService.returnedRSS().then(function(response){

      this.$scope.blogData = response.data.responseData.feed.entries;

    }.bind(this));

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'FeedService'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());

