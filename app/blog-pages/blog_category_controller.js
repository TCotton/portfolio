'use strict';
(function() {
  class BlogCatController {

    /**
     * @description For displaying posts in their respective categories
     * @param $scope {object}
     * @param $location {object}
     * @param BlogDataService {object}
     * @param $log {object}
     * @param $angularCacheFactory {function}
     * @param $rootScope {object}
     * @param _ {function}
     * @constructor
     */
    constructor($scope, $location, BlogDataService, $log, $angularCacheFactory, $rootScope, _) {

      this.$scope = $scope;
      this.$location = $location;
      this.$log = $log;
      this.$rootScope = $rootScope;

      this.$scope.cats = {};
      this.$scope.cats.displayMore = false;
      this.$scope.cats.title = null;
      this.$scope.displayPosts = 10;
      this.$scope.blogPosts = null;

      const urlPath = this.$location.path();
      const category = urlPath.substring(urlPath.lastIndexOf('/') + 1, urlPath.length);

      /** Either receive data from BlogDataService or from the cache
       * **/
      if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {

        this.$scope.blogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');

      } else {

        // start loader spinner in loaderDirective
        this.$rootScope.loader = true;

        BlogDataService.retrieveData().then((result) => {

          if (_.isObject(result.data.BlogPosts)) {

            // stop loader spinner in loaderDirective

            this.$rootScope.loader = false;
            this.$scope.blogPosts = result.data.BlogPosts;

          }

        });

      }
      /**
       * @function _filterBlogPosts
       * @description filter blog articles based on category
       * category is found using the $location object
       * @type {function(this:BlogCatController)|*|Function}
       * @private
       */
      let _filterBlogPosts = (blogs) => {

        return _.chain(blogs)
          .filter(function(item) {

            if (_.isString(item.category) && item.category.toLowerCase() === category) {
              return item;
            }

          }).value();

      };

      this.$scope.$watch('blogPosts', (newData) => {

        if (newData !== null) {

          this.$scope.totalBlogPosts = _filterBlogPosts(newData);

          if (this.$scope.totalBlogPosts.length >= this.$scope.displayPosts) {

            this.$scope.cats.displayMore = true;

          }

          if (_.isEmpty(this.$scope.totalBlogPosts)) {
            // if empty send to 404 page
            // if not empty redirect to 404
            // TODO: move this server side
            this.$location.path('/404');

          }

          this.$rootScope.pageTitle = category + ' / blog unblock';
          this.$scope.cats.title = category;
          this.$scope.URLencoded = encodeURIComponent(this.$rootScope.currentPage);
          this.$rootScope.faceBookDescription = 'List page for ' + category + ' category on the blog of web developer, Andy walpole';

        }// end if(newData !== null) {

      });

    }

    morePosts() {
      this.$scope.displayPosts = this.$scope.displayPosts + 10;
    }

  }

  BlogCatController.$inject = ['$scope', '$location', 'BlogDataService', '$log', '$angularCacheFactory', '$rootScope', '_'];

  angular.module('portfolioApp.blogPagesController').controller('BlogCatController', ['$scope', '$location', 'BlogDataService', '$log', '$angularCacheFactory', '$rootScope', '_', function($scope, $location, BlogDataService, $log, $angularCacheFactory, $rootScope, _) {
    return new BlogCatController($scope, $location, BlogDataService, $log, $angularCacheFactory, $rootScope, _);
  }]);

}());