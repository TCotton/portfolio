/**
 * Created by awalpole on 05/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var BlogArticleCtrl = function ($rootScope, $scope, $location, BlogDataService, $log, $timeout) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$location = $location;
    this.BlogDataService = BlogDataService;
    this.$log = $log;
    this.$timeout = $timeout;

    this.$scope.title = null;
    this.$scope.content = null;

    this.loadBlogData();

  };

  BlogArticleCtrl.$inject = ['$rootScope', '$scope', '$location', 'BlogDataService', '$log', '$timeout'];

  BlogArticleCtrl.prototype.loadBlogData = function () {

    var blogData;

    var getPromise = this.BlogDataService.retreiveData().data;

    getPromise.then(function (data) {

      if (data.workComplete) {

        blogData = data;

        this.$scope.oldBlogPosts = blogData.oldBlogPosts;
        this.populatePage();

      }

    }.bind(this), function (response) {

      this.$log.log('Error BlogArticleCtrl', response);

    }.bind(this));

  };

  BlogArticleCtrl.prototype.populatePage = function() {

    // find blogId number at the end of the URL, ie ?id=182013
    var blogId = this.$rootScope.currentPage.slice(this.$rootScope.currentPage.indexOf('?id=') + 4, this.$rootScope.currentPage.length );

    var blogPost = _.filter(this.$scope.oldBlogPosts, function (o) {

      var regex = /\D/g;

      // filter articles array to find the correct article for the page
      if (o.publishedDate.replace(regex,'').substring(0,6) === blogId) {

        return o.publishedDate;
      }
    });

    this.$scope.title = blogPost[0].title;
    this.$scope.content = blogPost[0].content;
    this.$scope.displayImage = blogPost[0].displayImage;
    this.$scope.publishedDate = blogPost[0].publishedDate;

  };

  app.controller('BlogArticleCtrl', BlogArticleCtrl);

}());