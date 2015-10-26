/**
 * Created by awalpole on 06/09/2014.
 */

// use MOCK_DATA array of blog content

// check that all scope and rootScope attributes have the correct value
// check 404 works if incorrect
// check display more scope

'use strict';
describe('Controller: BlogCatController as BlogCatPageController', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var BlogCatPageController;
  var $angularCacheFactory;
  var $location;

  beforeEach(module('testConstants', 'portfolioApp.blogPagesController', 'portfolioApp.blogPagesService', 'portfolioApp.blogAdminService', 'AppConstants', 'ngRoute', 'portfolioAppConfig', 'jmdobry.angular-cache', 'underscore', 'detectLocalStorage', 'fastclick'));

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

    $location.path('/category/angularjs');
    $rootScope.$digest(); // call the digest loop

    scope = $rootScope.$new();

    BlogCatPageController = $controller('BlogCatController as BlogCatPageController', {
      $scope: scope
    });

    $httpBackend.expect('GET', '/api/oldBlog/get?BLOG=%7B%22BLOG_1%22:%22images%2Fblog-stock-images%2Fstock-photo-one.jpg%22,%22BLOG_2%22:%22images%2Fblog-stock-images%2Fstock-photo-two.jpg%22,%22BLOG_3%22:%22images%2Fblog-stock-images%2Fstock-photo-three.jpg%22,%22BLOG_4%22:%22images%2Fblog-stock-images%2Fstock-photo-four.jpg%22,%22BLOG_5%22:%22images%2Fblog-stock-images%2Fstock-photo-five.jpg%22,%22BLOG_6%22:%22images%2Fblog-stock-images%2Fstock-photo-six.jpg%22,%22BLOG_7%22:%22images%2Fblog-stock-images%2Fstock-photo-seven.jpg%22,%22BLOG_8%22:%22images%2Fblog-stock-images%2Fstock-photo-eight.jpg%22,%22BLOG_9%22:%22images%2Fblog-stock-images%2Fstock-photo-nine.jpg%22,%22BLOG_10%22:%22images%2Fblog-stock-images%2Fstock-photo-ten.jpg%22%7D&RSSFeed=http:%2F%2F2223d9145efd2b35ed36-6671f2c2aa691e80e8c08f3a239bdfd7.r67.cf3.rackcdn.com%2Frss_feed.xml').respond(200, MOCK_DATA.allBlogData.data);

    scope.blogPosts = MOCK_DATA.allBlogData.data;

    scope.$apply();

  }));

  it('Testing local scope change after database call on category page with one blog article', function () {

    expect(scope.cats.displayMore).toBe(false);
    expect(scope.cats.title).toBe('angularjs');
    expect(scope.URLencoded).toContain('angularjs');

  });

  it('Testing rootScope scope change after database call on category page with one blog article', function () {

    expect($rootScope.pageTitle).toContain('angularjs');
    expect($rootScope.faceBookDescription).toContain('angularjs');

  });


});