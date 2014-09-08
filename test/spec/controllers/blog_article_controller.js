/**
 * Created by awalpole on 06/09/2014.
 */

'use strict';
describe('Controller: BlogArticleCtrl as BlogArticlePageCtrl', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var BlogArticlePageCtrl;
  var $angularCacheFactory;
  var $location;

  beforeEach(module('testConstants', 'portfolioApp.controllers', 'portfolioApp.services', 'AppConstants', 'ngSanitize', 'ngRoute', 'HashBangURLs', 'portfolioAppConfig', 'jmdobry.angular-cache'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_, _$angularCacheFactory_, _$location_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    $angularCacheFactory = _$angularCacheFactory_;
    $location = _$location_;

    $angularCacheFactory('blogCache', {
      maxAge: 86400000,
      deleteOnExpire: 'aggressive',
      storageMode: 'sessionStorage'
    });

    $angularCacheFactory('authCache', {
      maxAge: 86400000,
      deleteOnExpire: 'aggressive',
      storageMode: 'sessionStorage'
    });

    $location.path('/blog/139800/use-sass-strategically-conservatively');
    $rootScope.$digest(); // call the digest loop

    scope = $rootScope.$new();

    BlogArticlePageCtrl = $controller('BlogArticleCtrl as BlogArticlePageCtrl', {
      $scope: scope
    });

    $httpBackend.expect('GET', '/api/oldBlog/get?BLOG=%7B%22BLOG_1%22:%22images%2Fblog-stock-images%2Fstock-photo-one.jpg%22,%22BLOG_2%22:%22images%2Fblog-stock-images%2Fstock-photo-two.jpg%22,%22BLOG_3%22:%22images%2Fblog-stock-images%2Fstock-photo-three.jpg%22,%22BLOG_4%22:%22images%2Fblog-stock-images%2Fstock-photo-four.jpg%22,%22BLOG_5%22:%22images%2Fblog-stock-images%2Fstock-photo-five.jpg%22,%22BLOG_6%22:%22images%2Fblog-stock-images%2Fstock-photo-six.jpg%22,%22BLOG_7%22:%22images%2Fblog-stock-images%2Fstock-photo-seven.jpg%22,%22BLOG_8%22:%22images%2Fblog-stock-images%2Fstock-photo-eight.jpg%22,%22BLOG_9%22:%22images%2Fblog-stock-images%2Fstock-photo-nine.jpg%22,%22BLOG_10%22:%22images%2Fblog-stock-images%2Fstock-photo-ten.jpg%22%7D&RSSFeed=http:%2F%2F2223d9145efd2b35ed36-6671f2c2aa691e80e8c08f3a239bdfd7.r67.cf3.rackcdn.com%2Frss_feed.xml').respond(200, MOCK_DATA.allBlogData.data);

    scope.oldBlogPosts = MOCK_DATA.allBlogData.data;

    scope.$apply(function () {
      BlogArticlePageCtrl.populatePage();
    });


  }));

  it('Test local scope changes there the page ID equals an item in the database', function () {

    expect(scope.title).toBe(MOCK_DATA.allBlogData.data[0].title);
    expect(scope.publishedDate).toBe(MOCK_DATA.allBlogData.data[0].publishedDate);
    expect(scope.category).toBe(MOCK_DATA.allBlogData.data[0].category);

    /**
     *
     *   this.$scope.title = blogPost[0].title;
     this.$rootScope.pageTitle = blogPost[0].title;
     this.$scope.content = this.$sce.trustAsHtml(blogPost[0].content);
     this.$scope.aside = this.$sce.trustAsHtml(blogPost[0].aside);
     this.$scope.displayImage = blogPost[0].displayImage;
     this.$scope.publishedDate = blogPost[0].publishedDate;
     this.$scope.commentsOpen = blogPost[0].commentsOpen;
     this.$scope.category = blogPost[0].category || 'General';
     this.$scope.URLencoded = encodeURIComponent(this.$rootScope.currentPage);
     */


  });


});