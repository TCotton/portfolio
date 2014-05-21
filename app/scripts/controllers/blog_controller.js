/**
 * Created by andywalpole on 01/04/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var BlogCtrl = function ($rootScope, $scope, $location, BlogDataService, $log, $timeout, $angularCacheFactory) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$location = $location;
    this.$log = $log;
    this.$timeout = $timeout;

    var _this = this;

    /** Either receive data from BlogDataService or from the cache
     * **/
    if ($angularCacheFactory.get('blogCache').get('allBlogPosts')) {
      this.$scope.totalBlogPosts = $angularCacheFactory.get('blogCache').get('allBlogPosts');
      this.$scope.totalArticles = $angularCacheFactory.get('blogCache').get('totalArticles');
    }

    /* the number of articles per page */
    this.$scope.paginationPageSize = 10;
    /* used in */
    this.$scope.paginationPageSizeLimit = -10;
    this.$scope.returnObject = null;

    BlogDataService.retrieveData().then(function (result) {

      if (_.isObject(result.data.BlogPosts)) {

        _this.$scope.totalBlogPosts = result.data.BlogPosts;
        _this.$scope.totalArticles = result.data.totalArticles;

        // why is this used for ?
        _this.paginationTotalPages = Math.ceil(_this.totalArticles / _this.paginationPageSize);

      }

    });

    this.$scope.click = null;
    this.$scope.next = null;
    this.$scope.prev = null;

    this.startingPagination();

  };

  BlogCtrl.$inject = ['$rootScope', '$scope', '$location', 'BlogDataService', '$log', '$timeout', '$angularCacheFactory'];

  BlogCtrl.prototype.currentPage = function () {

    // return the current page url id value
    return this.$rootScope.currentPage.substr(this.$rootScope.currentPage.length - 2, this.$rootScope.currentPage.length - 1);

  };

  /** TODO refactor pagination
   * **/

  BlogCtrl.prototype.startingPagination = function () {

    var patt = /^=\d{1}$/; // if end of string is an equal sign and one digit
    var pattTwo = /^\d{2}$/; // if end of string is two digits

    if (this.currentPage().charAt(this.currentPage().length - 1) === '/') {

      this.$scope.paginationStartFrom = this.$scope.paginationPageSize;

      this.$scope.next = '/#!/blog/?page=2';

    }

    if (patt.test(this.currentPage())) {
      // pattern for blog index page: /blog/

      this.$scope.paginationStartFrom = this.currentPage().charAt(this.currentPage().length - 1) * this.$scope.paginationPageSize;

      console.log('this.$scope.paginationStartFrom');
      console.log(this.$scope.paginationStartFrom);

      this.$scope.prev = ((this.$scope.paginationStartFrom / this.$scope.paginationPageSize) - 1) !== 0 ? '/#!/blog/?page=' + ((this.paginationStartFrom / this.paginationPageSize) - 1) : '/#!/blog/';
      this.$scope.next = '/#!/blog/?page=' + ((this.$scope.paginationStartFrom / this.$scope.paginationPageSize) + 1);

    }

    if (pattTwo.test(this.currentPage())) {

      // pattern for blog index page pagination: /blog/?page=3

      if (this.currentPage() < this.$scope.totalArticles) {

        this.$scope.paginationStartFrom = this.currentPage() * this.$scope.paginationPageSize;

      } else {

        this.$scope.paginationStartFrom = this.$scope.totalArticles - this.$scope.paginationPageSize;

      }

      if (this.$scope.paginationStartFrom > this.$scope.totalArticles) {
        // if the user attempts to access a blog index page above that needed

        //place redirect here

        // $scope.$digest(function () {
        this.$location.path('/blog/');
        // });

      }
    }

  };

  app.controller('BlogCtrl', BlogCtrl);

}());