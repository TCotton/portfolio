/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  /** Declare enclosed scope variable names
   * **/
  var _sortCategoriesByPopularity;

  var SidebarCtrl = function ($rootScope, $scope, $log, BlogDataService, $angularCacheFactory, $window) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.$window = $window;

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
      this.$scope.blogData = $angularCacheFactory.get('blogCache').get('allBlogPosts');
      console.dir(this.$scope.blogData);
    }

    /** Take blog object from service ready to be used in the side bar lists
     **/
    BlogDataService.retrieveData().then(function (result) {

      // retrieve blog data to be used in the ng-repeat directive in the sidebar

      if (_.isObject(result.data.BlogPosts)) {

        this.$scope.blogData = result.data.BlogPosts;

      }

    }.bind(this), function (response) {

      this.$log.warn('Error SidebarCtrl');
      this.$log.warn(response);

    }.bind(this));


    /** Plucks category names from object and then sorts them by popularity
     * **/
    _sortCategoriesByPopularity = function () {

      var newArray = {};

      _.chain(this.$scope.blogData)
        .pluck('category')
        .filter(function (r) {
          return typeof r !== 'undefined';
        })
        .groupBy(function (list) {
          return list;
        })
        .each(function (list, iterator) {
          newArray[iterator] = _.size(list);
        });

      return Object.keys(newArray).sort(function (a, b) {
        return -(newArray[a] - newArray[b]);
      });

    }.bind(this);

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService', '$angularCacheFactory', '$window'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());