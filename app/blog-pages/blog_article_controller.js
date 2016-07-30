'use strict';
(function() {
  class BlogArticleCtrl {

    /**
     * @description For displaying individual blog posts
     * @param $rootScope {object}
     * @param $scope {object}
     * @param $location {object}
     * @param BlogDataService {object}
     * @param $log {object}
     * @param $timeout {function}
     * @param $sce {object}
     * @param $angularCacheFactory {function}
     * @param $route {object}
     * @param $filter {function}
     * @param _ {function}
     * @constructor
     */

    constructor($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce, $angularCacheFactory, $route, $filter, _) {

      Object.assign(this, {$rootScope, $scope, $location, $log, $timeout, $sce, $route, $filter});

      this.$scope.oldBlogPosts = null;
      this.$scope.title = null;
      this.$scope.content = null;
      this.$scope.aside = null;
      this.$scope.article = null;

      /** Load blog data from either the service or cache and then populate the page with the values
       * **/
      if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {

        this.$scope.oldBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');

      } else {

        // start loader spinner in loaderDirective

        this.$rootScope.loader = true;

        BlogDataService.retrieveData().then((result) => {

          if (_.isObject(result.data.BlogPosts)) {

            // start loader spinner in loaderDirective

            this.$rootScope.loader = false;
            this.$scope.oldBlogPosts = result.data.BlogPosts;

          }

        }, (response) => {

          this.$log.warn('Error BlogArticleCtrl');
          this.$log.warn(response);

        });

      }

      // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
      var blogId = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf('/blog/') + 6, this.$rootScope.currentPage.indexOf('/blog/') + 12);
      
      /**
       * @type {function(this:BlogArticleCtrl)|*|Function}
       * @private
       */
      let _renderArticle = () => {

        let blogPost = _.filter(this.$scope.oldBlogPosts, function(o) {

          // filter articles array to find the correct article for the page
          if (o.publishedDate.substring(0, 6) === blogId) {
            return o.publishedDate;
          }
        });

        if (!_.isEmpty(blogPost) && this.$rootScope.currentPage.indexOf(blogPost[0].url) !== -1) {

          this.$scope.title = blogPost[0].title;
          this.$scope.author = blogPost[0].author;
          this.$rootScope.pageTitle = blogPost[0].title + ' / blog unblock';
          this.$scope.content = blogPost[0].content;
          this.$scope.aside = this.$sce.trustAsHtml(blogPost[0].aside);
          this.$scope.displayImage = blogPost[0].displayImage;
          if (blogPost[0].displayImage.indexOf('stock-photo') !== -1) {

            let dot = blogPost[0].displayImage.lastIndexOf('.');
            this.$scope.displaySrcsetImage = blogPost[0].displayImage.slice(0, dot) + '-small' + blogPost[0].displayImage.slice(dot);

          } else {

            this.$scope.displaySrcsetImage = blogPost[0].displayImage;

          }
          this.$scope.publishedDate = blogPost[0].publishedDate;
          this.$scope.commentsOpen = blogPost[0].commentsOpen;
          this.$scope.category = blogPost[0].category || 'General';
          this.$scope.URLencoded = encodeURIComponent(this.$rootScope.currentPage);
          this.$rootScope.faceBookTitle = blogPost[0].title;
          this.$rootScope.faceBookDescription = blogPost[0].contentSnippet;
          this.$timeout(() => {
            this.$scope.wordCount = this.$filter('wordcount')(document.querySelector('section > div').innerText || document.querySelector('section > div').textContent);
          }, 0);

        } else {

          // if not empty redirect to homepage
          // TODO: move this server side
          this.$location.path('/');

        }

      };

      this.$scope.$watch('oldBlogPosts', function(blogData) {

        if (blogData !== null) {
          _renderArticle();
        }

      });

    }

  }

  BlogArticleCtrl.$inject = ['$rootScope', '$scope', '$location', 'BlogDataService', '$log', '$timeout', '$sce', '$angularCacheFactory', '$route', '$filter', '_'];

  angular.module('portfolioApp.blogPagesController').controller('BlogArticleCtrl', ['$rootScope', '$scope', '$location', 'BlogDataService', '$log', '$timeout', '$sce', '$angularCacheFactory', '$route', '$filter', '_', function($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce, $angularCacheFactory, $route, $filter, _) {
    return new BlogArticleCtrl($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce, $angularCacheFactory, $route, $filter, _);
  }]);

}());

