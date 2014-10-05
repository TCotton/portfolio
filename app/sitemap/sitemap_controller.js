/**
 * Created by awalpole on 21/05/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var _sortCategoriesByPopularity;

  /**
   * @description For displaying a HTML sitemap
   * @param $rootScope
   * @param $scope
   * @param $log
   * @param BlogDataService
   * @param $angularCacheFactory
   * @constructor
   */
  var SitemapCtrl = function ($rootScope, $scope, $log, BlogDataService, $angularCacheFactory) {

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
      $scope.blogData = $angularCacheFactory.get('blogCache').get('allBlogPosts');
    }

    /** Take blog object from service ready to be used in the side bar lists
     **/
    BlogDataService.retrieveData().then(function (result) {

      // retrieve blog data to be used in the ng-repeat directive in the sidebar

      if (_.isObject(result.data.BlogPosts)) {

        $scope.blogData = result.data.BlogPosts;

      }

    }, function (response) {

      $log.warn('Error SitemapCtrl');
      $log.warn(response);

    });


    /** Plucks category names from object and then sorts them by popularity
     * **/
    _sortCategoriesByPopularity = function () {

      var newArray = {};

      _.chain($scope.blogData)
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

    };

   $scope.$watch('blogData', function (newData) {

      if (newData !== null && !$angularCacheFactory.get('blogCache').get('blogTags')) {

        $scope.blogTags = _sortCategoriesByPopularity(newData);
        $angularCacheFactory.get('blogCache').put('blogTags', $scope.blogTags);


      } else if (newData !== null && $angularCacheFactory.get('blogCache').get('blogTags')) {

        $scope.blogTags = $angularCacheFactory.get('blogCache').get('blogTags');


      }

    });

  };

  SitemapCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService', '$angularCacheFactory'];

  app.controller('SitemapCtrl', SitemapCtrl);

}());