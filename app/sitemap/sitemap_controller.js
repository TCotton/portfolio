(function() {
  'use strict';
  class SitemapCtrl {
    /**
     * @description For displaying a HTML sitemap
     * @param $scope {object}
     * @param $log {object}
     * @param BlogDataService {object}
     * @param $angularCacheFactory {function}
     * @param _ {function}
     * @constructor
     */
    constructor($scope, $log, BlogDataService, $angularCacheFactory, _) {

      /** Either receive data from BlogDataService or from the cache
       * **/
      if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
        $scope.blogData = $angularCacheFactory.get('blogCache').get('allBlogPosts');
      }

      /** Take blog object from service ready to be used in the side bar lists
       **/
      BlogDataService.retrieveData().then(function(result) {

        // retrieve blog data to be used in the ng-repeat directive in the sidebar
        if (_.isObject(result.data.BlogPosts)) {
          $scope.blogData = result.data.BlogPosts;
        }

      }, function(response) {

        $log.warn('Error SitemapCtrl');
        $log.warn(response);

      });

      /** Plucks category names from object and then sorts them by popularity
       * **/
      let _sortCategoriesByPopularity = function() {

        let newArray = {};

        _.chain($scope.blogData)
          .pluck('category')
          .filter(function(r) {
            return typeof r !== 'undefined';
          })
          .groupBy(function(list) {
            return list;
          })
          .each(function(list, iterator) {
            newArray[iterator] = _.size(list);
          });

        return Object.keys(newArray).sort(function(a, b) {
          return -(newArray[a] - newArray[b]);
        });

      };

      $scope.$watch('blogData', function(newData) {

        if (newData !== null && !$angularCacheFactory.get('blogCache').get('blogTags')) {

          $scope.blogTags = _sortCategoriesByPopularity(newData);
          $angularCacheFactory.get('blogCache').put('blogTags', $scope.blogTags);

        } else if (newData !== null && $angularCacheFactory.get('blogCache').get('blogTags')) {

          $scope.blogTags = $angularCacheFactory.get('blogCache').get('blogTags');

        }

      });

    }
  }

  SitemapCtrl.$inject = ['$scope', '$log', 'BlogDataService', '$angularCacheFactory', '_'];

  angular.module('portfolioApp.sideProjectsController').controller('SitemapCtrl', ['$scope', '$log', 'BlogDataService', '$angularCacheFactory', '_', function($scope, $log, BlogDataService, $angularCacheFactory, _) {
    return new SitemapCtrl($scope, $log, BlogDataService, $angularCacheFactory, _);
  }]);

}());
