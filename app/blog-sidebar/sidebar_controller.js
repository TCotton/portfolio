/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.blogSidebarController');

  /** Declare enclosed scope variable names
   * **/
  var _sortCategoriesByPopularity;
  var _populateBlogScope;
  var _handleMediaMatch;

  /**
   * @description Displays blog posts and categories in blog sidebar
   * @param $rootScope
   * @param $scope
   * @param $log
   * @param BlogDataService
   * @param $angularCacheFactory
   * @param $window
   * @param $timeout
   * @constructor
   */
  var SidebarCtrl = function ($rootScope, $scope, $log, BlogDataService, $angularCacheFactory, $window, $timeout) {

    $scope.blogData = null;

    /**
     * @function _populateBlogScope
     * @description Populates blog scope if media query is matched
     * @type {function(this:SidebarCtrl)|*|Function}
     * @private
     */
    _populateBlogScope = function () {

      /** Either receive data from BlogDataService or from the cache
       * **/
      if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {

        $scope.blogData = $angularCacheFactory.get('blogCache').get('allBlogPosts');

      } else {

        /** Take blog object from service ready to be used in the side bar lists
         **/
        BlogDataService.retrieveData().then(function (result) {

          // retrieve blog data to be used in the ng-repeat directive in the sidebar
          if (_.isObject(result.data.BlogPosts)) {

            $scope.blogData = result.data.BlogPosts;

          }

        }, function (response) {

          $log.warn('Error SidebarCtrl');
          $log.warn(response);

        });

      }

    };


    /** Plucks category names from object and then sorts them by popularity
     * **/

    /**
     *
     * @param blogPosts
     * @returns {Array}
     * @private
     */
    _sortCategoriesByPopularity = function (blogPosts) {

      var newArray = {};

      _.chain(blogPosts)
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

    /**
     * @function _handleMediaMatch
     * @description function used with matchMedia event
     * @type {function(this:SidebarCtrl)|*|Function}
     * @private
     */

    _handleMediaMatch = function (mql) {

      if (!mql.matches) {

        $timeout(function () {
          _populateBlogScope();
        }, 0);

        var unbindWatcher = $scope.$watch('blogData', function (newData) {

          if (newData !== null && !$angularCacheFactory.get('blogCache').get('blogTags')) {

            $scope.blogTags = _sortCategoriesByPopularity(newData);
            $angularCacheFactory.get('blogCache').put('blogTags', $scope.blogTags);
            unbindWatcher();

          } else if (newData !== null && $angularCacheFactory.get('blogCache').get('blogTags')) {

            $scope.blogTags = $angularCacheFactory.get('blogCache').get('blogTags');
            unbindWatcher();

          }

          mql.removeListener(_handleMediaMatch);

        });

      }

    };


    if ($window.matchMedia) {

      var mql = $window.matchMedia('screen and (max-width: 767px)');
      mql.addListener(_handleMediaMatch);
      _handleMediaMatch(mql);

    } else {

      _populateBlogScope();

    }

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService', '$angularCacheFactory', '$window', '$timeout'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());