/**
 * Created by awalpole on 11/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  /** Declare enclosed scope variable names
   * **/
  var _sortCategoriesByPopularity;
  var _populateBlogScope;
  var _handleMediaMatch;

  var SidebarCtrl = function ($rootScope, $scope, $log, BlogDataService, $angularCacheFactory, $window, $timeout) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.$window = $window;
    this.$timeout = $timeout;

    this.$scope.blogData = null;

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
        this.$scope.blogData = $angularCacheFactory.get('blogCache').get('allBlogPosts');
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

    }.bind(this);


    /** Plucks category names from object and then sorts them by popularity
     * **/
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

    }.bind(this);

    /**
     * @function _handleMediaMatch
     * @description function used with matchMedia event
     * @type {function(this:SidebarCtrl)|*|Function}
     * @private
     */

    _handleMediaMatch = function (mql) {

      if (!mql.matches) {

        this.$timeout(function () {
          _populateBlogScope();
        }, 0);

        this.$scope.$watch('blogData', function(newData) {

          if(newData !== null && !$angularCacheFactory.get('blogCache').get('blogTags')) {

            this.$scope.blogTags = _sortCategoriesByPopularity(newData);
            $angularCacheFactory.get('blogCache').put('blogTags', this.$scope.blogTags);

          } else if (newData !== null && $angularCacheFactory.get('blogCache').get('blogTags')) {

            this.$scope.blogTags = $angularCacheFactory.get('blogCache').get('blogTags');

          }

          mql.removeListener(_handleMediaMatch);

        }.bind(this));

      }

    }.bind(this);


    if (this.$window.matchMedia) {

        var mql = this.$window.matchMedia('screen and (max-width: 767px)');
        mql.addListener(_handleMediaMatch);
        _handleMediaMatch(mql);

    } else {

      _populateBlogScope();

    }

  };

  SidebarCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogDataService', '$angularCacheFactory', '$window', '$timeout'];

  app.controller('SidebarCtrl', SidebarCtrl);

}());