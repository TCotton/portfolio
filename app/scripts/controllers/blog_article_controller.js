/**
 * Created by awalpole on 05/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var BlogArticleCtrl = function ($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce, $angularCacheFactory, $route) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$location = $location;
    this.$log = $log;
    this.$timeout = $timeout;
    this.$sce = $sce;
    this.$angularCacheFactory = $angularCacheFactory;
    this.$route = $route;

    this.$scope.title = null;
    this.$scope.content = null;

    /** Load blog data from either the service or cache and then populate the page with the values
     * **/

    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
      this.$scope.oldBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');
      this.populatePage();
    }

    BlogDataService.retrieveData().then(function (result) {

      this.$scope.oldBlogPosts = result.data.BlogPosts;
      this.populatePage();

    }.bind(this), function (response) {

      this.$log.warn('Error BlogArticleCtrl');
      this.$log.warn(response);

    }.bind(this));

  };

  BlogArticleCtrl.$inject = ['$rootScope', '$scope', '$location', 'BlogDataService', '$log', '$timeout', '$sce', '$angularCacheFactory', '$route'];

  BlogArticleCtrl.prototype.populatePage = function () {

    // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
    var blogId = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf('/#!/') + 9, this.$rootScope.currentPage.indexOf('/#!/') + 15);

    var blogPost = _.filter(this.$scope.oldBlogPosts, function (o) {

      // filter articles array to find the correct article for the page
      if (o.publishedDate.substring(0, 6) === blogId) {

        return o.publishedDate;
      }
    });

    if (!_.isEmpty(blogPost) && this.$rootScope.currentPage.indexOf(blogPost[0].url) !== -1) {

      this.$scope.title = blogPost[0].title;
      this.$rootScope.pageTitle = blogPost[0].title;
      this.$scope.content = this.$sce.trustAsHtml(blogPost[0].content);
      this.$scope.displayImage = blogPost[0].displayImage;
      this.$scope.publishedDate = blogPost[0].publishedDate;

    } else {

      // if not empty redirect to homepage
      // TODO: move this server side
      this.$location.path('/#!/');

    }

  };

  app.controller('BlogArticleCtrl', BlogArticleCtrl);

}());