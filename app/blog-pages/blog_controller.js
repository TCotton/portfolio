'use strict';
(function() {
  class BlogCtrl {

    /**
     * @description Blog home page
     * @param $scope {object}
     * @param BlogDataService {object}
     * @param $angularCacheFactory {function}
     * @param $rootScope {function}
     * @param _ {object}
     * @constructor
     */

    constructor($scope, BlogDataService, $angularCacheFactory, _, $rootScope) {

      this.$scope = $scope;
      this.$rootScope = $rootScope;

      this.$scope.displayPosts = 5;

      /** Either receive data from BlogDataService or from the cache
       * **/
      if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {

        this.$scope.totalBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');

      } else {

        // start loader spinner in loaderDirective

        this.$rootScope.loader = true;

        BlogDataService.retrieveData().then((result) => {

          console.dir(result);

          if (_.isObject(result.data.BlogPosts)) {

            // stop loader spinner in loaderDirective

            this.$rootScope.loader = false;
            this.$scope.totalBlogPosts = result.data.BlogPosts;

          }

        });

      }
    }
  }

  BlogCtrl.$inject = ['$scope', 'BlogDataService', '$angularCacheFactory', '_', '$rootScope'];

  angular.module('portfolioApp.blogPagesController').controller('BlogCtrl', ['$scope', 'BlogDataService', '$angularCacheFactory', '_', '$rootScope', function($scope, BlogDataService, $angularCacheFactory, _, $rootScope) {
    return new BlogCtrl($scope, BlogDataService, $angularCacheFactory, _, $rootScope);
  }]);

}());