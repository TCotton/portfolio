/**
 * Created by awalpole on 05/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.blogPagesController');

  /**
   * @description For displaying individual blog posts
   * @param $rootScope
   * @param $scope
   * @param $location
   * @param BlogDataService
   * @param $log
   * @param $timeout
   * @param $sce
   * @param $angularCacheFactory
   * @param $route
   * @param $filter
   * @constructor
   */
  var BlogArticleCtrl = function ($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce, $angularCacheFactory, $route, $filter) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$location = $location;
    this.$log = $log;
    this.$timeout = $timeout;
    this.$sce = $sce;
    this.$route = $route;
    this.$filter = $filter;

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

      BlogDataService.retrieveData().then(function (result) {

        if (_.isObject(result.data.BlogPosts)) {

          this.$scope.oldBlogPosts = result.data.BlogPosts;

        }

      }.bind(this), function (response) {

        this.$log.warn('Error BlogArticleCtrl');
        this.$log.warn(response);

      }.bind(this));

    }

  };

  BlogArticleCtrl.$inject = ['$rootScope', '$scope', '$location', 'BlogDataService', '$log', '$timeout', '$sce', '$angularCacheFactory', '$route', '$filter'];

  BlogArticleCtrl.prototype.populatePage = function () {

    // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
    var blogId = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf('/#!/') + 9, this.$rootScope.currentPage.indexOf('/#!/') + 15);

    /**
     * @type {function(this:BlogArticleCtrl)|*|Function}
     * @private
     */
    var _renderArticle = function () {

      var blogPost = _.filter(this.$scope.oldBlogPosts, function (o) {

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

          var dot = blogPost[0].displayImage.lastIndexOf('.');
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
        this.$timeout(function () {
          this.$scope.wordCount = this.$filter('wordcount')(document.querySelector('section > div').innerText || document.querySelector('section > div').textContent);
        }.bind(this), 0);

      } else {

        // if not empty redirect to homepage
        // TODO: move this server side
        this.$location.path('/#!/');

      }

    }.bind(this);

    this.$scope.$watch('oldBlogPosts', function (blogData) {

      if (blogData !== null) {

        _renderArticle();

      }

    });

  };

  app.controller('BlogArticleCtrl', BlogArticleCtrl);

}());