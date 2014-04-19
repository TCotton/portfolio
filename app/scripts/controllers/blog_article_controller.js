/**
 * Created by awalpole on 05/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var BlogArticleCtrl = function ($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$location = $location;
    this.BlogDataService = BlogDataService;
    this.$log = $log;
    this.$timeout = $timeout;
    this.$sce = $sce;

    this.$scope.title = null;
    this.$scope.content = null;

    this.loadBlogData();

  };

  BlogArticleCtrl.$inject = ['$rootScope', '$scope', '$location', 'BlogDataService', '$log', '$timeout', '$sce'];

  /** Load blog data from either the service or cache and then populate the page with the values
   * **/

  BlogArticleCtrl.prototype.loadBlogData = function () {

    if (localStorage.getItem('oldBlogPosts')) {
      this.$scope.oldBlogPosts = angular.extend(JSON.parse(localStorage.getItem('oldBlogPosts')), JSON.parse(sessionStorage.getItem('totalNewArticles')));
      this.populatePage();
    }

    this.BlogDataService.retreiveData().then(function (data) {

      this.$scope.oldBlogPosts = data.oldBlogPosts;
      this.$scope.$broadcast('blog_posts', this.$scope.oldBlogPosts);
      this.populatePage();

    }.bind(this), function (response) {

      this.$log.warn('Error BlogArticleCtrl');
      this.$log.warn(response);

    }.bind(this));
  };

  BlogArticleCtrl.prototype.populatePage = function () {

    // find blogId number form the URL string, ie /#!/136324/using-autoload-in-object-orientated-wordpress-plugin
    var blogId = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf('/#!/') + 4, this.$rootScope.currentPage.indexOf('/#!/') + 10);

    var blogPost = _.filter(this.$scope.oldBlogPosts, function (o) {

      // filter articles array to find the correct article for the page
      if (o.publishedDate.substring(0, 6) === blogId) {

        return o.publishedDate;
      }
    });

    this.$scope.title = blogPost[0].title;
    this.$scope.content = this.$sce.trustAsHtml(blogPost[0].content);
    this.$scope.displayImage = blogPost[0].displayImage;
    this.$scope.publishedDate = blogPost[0].publishedDate;

  };

  app.controller('BlogArticleCtrl', BlogArticleCtrl);

}());