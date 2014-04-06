/**
 * Created by andywalpole on 01/04/2014.
 */

'use strict';
//angular.module('portfolioApp').controller('BlogCtrl', ['FeedService', 'CONFIG', '$rootScope', '$scope', '$location', 'localStorageService', 'BlogDataService', function (FeedService, CONFIG, $rootScope, $scope, $location, localStorageService, BlogDataService) {
//
//
//  var blogData = BlogDataService.retreiveData().data;
//
//  $scope.totalArticles = blogData.totalNewArticles;
//  $scope.totalOldArticles = blogData.totalOldArticles;
//  $scope.totalNewArticles = blogData.totalNewArticles;
//  $scope.oldBlogPosts = blogData.oldBlogPosts;
//  /* the number of articles per page */
//  $scope.paginationPageSize = blogData.paginationPageSize;
//  /* used in */
//  $scope.paginationPageSizeLimit = blogData.paginationPageSizeLimit;
//  $scope.paginationStartFrom = blogData.paginationStartFrom;
//
//  $scope.paginationTotalPages = blogData.paginationTotalPages;
//  $scope.click = null;
//  $scope.next = null;
//  $scope.prev = null;
//
//  $scope.pagination = {
//
//    currentPage: function () {
//
//      return $rootScope.currentPage.substr($rootScope.currentPage.length - 2, $rootScope.currentPage.length - 1);
//
//    },
//
//    startingPagination: function () {
//
//      var patt = /^=\d{1}$/; // if end of string is an equal sign and one digit
//      var pattTwo = /^\d{2}$/; // if end of string is two digits
//
//      if ($scope.pagination.currentPage().charAt($scope.pagination.currentPage().length - 1) === '/') {
//
//        $scope.paginationStartFrom = $scope.paginationPageSize;
//
//        $scope.next = '/#!/blog/?page=2';
//
//      }
//
//      if (patt.test($scope.pagination.currentPage())) {
//        // pattern for blog index page: /blog/
//
//        $scope.paginationStartFrom = $scope.pagination.currentPage().charAt($scope.pagination.currentPage().length - 1) * $scope.paginationPageSize;
//
//        $scope.prev = (($scope.paginationStartFrom / $scope.paginationPageSize) - 1) !== 0 ? '/#!/blog/?page=' + (($scope.paginationStartFrom / $scope.paginationPageSize) - 1) : '/#!/blog/';
//        $scope.next = '/#!/blog/?page=' + (($scope.paginationStartFrom / $scope.paginationPageSize) + 1);
//
//      }
//
//      if (pattTwo.test($scope.pagination.currentPage())) {
//        // pattern for blog index page pagination: /blog/?page=3
//
//        if ($scope.pagination.currentPage() < $scope.totalArticles) {
//
//          $scope.paginationStartFrom = $scope.pagination.currentPage() * $scope.paginationPageSize;
//
//        } else {
//
//          $scope.paginationStartFrom = $scope.totalArticles - $scope.paginationPageSize;
//
//        }
//
//        if ($scope.paginationStartFrom > $scope.totalArticles) {
//          // if the user attempts to access a blog index page above that needed
//
//          //place redirect here
//
//          // $scope.$digest(function () {
//          $location.path('/blog/');
//          // });
//
//        }
//      }
//    }
//  };
//
//  $scope.pagination.startingPagination();
//
//}]);

(function () {

  var app = angular.module('portfolioApp');

  var BlogCtrl = function ($rootScope, $scope, $location, BlogDataService) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$location = $location;
    this.BlogDataService = BlogDataService;

    var blogData = BlogDataService.retreiveData().data;

    this.$scope.totalArticles = blogData.totalNewArticles;
    this.$scope.totalOldArticles = blogData.totalOldArticles;
    this.$scope.totalNewArticles = blogData.totalNewArticles;
    this.$scope.oldBlogPosts = blogData.oldBlogPosts;
    /* the number of articles per page */
    this.$scope.paginationPageSize = blogData.paginationPageSize;
    /* used in */
    this.$scope.paginationPageSizeLimit = blogData.paginationPageSizeLimit;
    this.$scope.paginationStartFrom = blogData.paginationStartFrom;

    this.$scope.paginationTotalPages = blogData.paginationTotalPages;
    this.$scope.click = null;
    this.$scope.next = null;
    this.$scope.prev = null;


    this.startingPagination();

  };

  BlogCtrl.$inject = ['$rootScope', '$scope', '$location', 'BlogDataService'];

  BlogCtrl.prototype.currentPage = function () {

    var _this = this;

    return _this.$rootScope.currentPage.substr(_this.$rootScope.currentPage.length - 2, _this.$rootScope.currentPage.length - 1);

  };

  BlogCtrl.prototype.startingPagination = function () {

    var _this = this;

    var patt = /^=\d{1}$/; // if end of string is an equal sign and one digit
    var pattTwo = /^\d{2}$/; // if end of string is two digits

    if (_this.currentPage().charAt(_this.currentPage().length - 1) === '/') {

      _this.$scope.paginationStartFrom = _this.$scope.paginationPageSize;

      _this.$scope.next = '/#!/blog/?page=2';

    }

    if (patt.test(_this.currentPage())) {
      // pattern for blog index page: /blog/

      _this.$scope.paginationStartFrom = _this.currentPage().charAt(_this.currentPage().length - 1) * _this.$scope.paginationPageSize;

      _this.$scope.prev = ((_this.$scope.paginationStartFrom / _this.$scope.paginationPageSize) - 1) !== 0 ? '/#!/blog/?page=' + ((_this.paginationStartFrom / _this.paginationPageSize) - 1) : '/#!/blog/';
      _this.$scope.next = '/#!/blog/?page=' + ((_this.$scope.paginationStartFrom / _this.$scope.paginationPageSize) + 1);

    }

    if (pattTwo.test(_this.currentPage())) {
      // pattern for blog index page pagination: /blog/?page=3

      if (_this.currentPage() < _this.$scope.totalArticles) {

        _this.$scope.paginationStartFrom = _this.currentPage() * _this.$scope.paginationPageSize;

      } else {

        _this.$scope.paginationStartFrom = _this.$scope.totalArticles - _this.$scope.paginationPageSize;

      }

      if (_this.$scope.paginationStartFrom > _this.$scope.totalArticles) {
        // if the user attempts to access a blog index page above that needed

        //place redirect here

        // $scope.$digest(function () {
        _this.$location.path('/blog/');
        // });

      }
    }

  };

  app.controller('BlogCtrl', BlogCtrl);

}());