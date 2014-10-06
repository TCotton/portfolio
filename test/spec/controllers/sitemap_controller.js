/**
 * Created by awalpole on 08/09/2014.
 */

'use strict';
describe('Controller: SitemapCtrl', function () {

  // load the controller's module
  beforeEach(module('testConstants', 'portfolioApp.sideProjectsController', 'portfolioApp.services', 'AppConstants', 'ngSanitize', 'ngRoute', 'HashBangURLs', 'portfolioAppConfig', 'jmdobry.angular-cache'));

  var $controller;
  var $rootScope;
  var SitemapCtrl;
  var scope;
  var $q;
  var MOCK_DATA;
  var $httpBackend;
  var $angularCacheFactory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _MOCK_DATA_, _$httpBackend_, _$angularCacheFactory_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $angularCacheFactory = _$angularCacheFactory_;

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

    scope = $rootScope.$new();

    $httpBackend.expect('GET', '/api/oldBlog/get?BLOG=%7B%22BLOG_1%22:%22images%2Fblog-stock-images%2Fstock-photo-one.jpg%22,%22BLOG_2%22:%22images%2Fblog-stock-images%2Fstock-photo-two.jpg%22,%22BLOG_3%22:%22images%2Fblog-stock-images%2Fstock-photo-three.jpg%22,%22BLOG_4%22:%22images%2Fblog-stock-images%2Fstock-photo-four.jpg%22,%22BLOG_5%22:%22images%2Fblog-stock-images%2Fstock-photo-five.jpg%22,%22BLOG_6%22:%22images%2Fblog-stock-images%2Fstock-photo-six.jpg%22,%22BLOG_7%22:%22images%2Fblog-stock-images%2Fstock-photo-seven.jpg%22,%22BLOG_8%22:%22images%2Fblog-stock-images%2Fstock-photo-eight.jpg%22,%22BLOG_9%22:%22images%2Fblog-stock-images%2Fstock-photo-nine.jpg%22,%22BLOG_10%22:%22images%2Fblog-stock-images%2Fstock-photo-ten.jpg%22%7D&RSSFeed=http:%2F%2F2223d9145efd2b35ed36-6671f2c2aa691e80e8c08f3a239bdfd7.r67.cf3.rackcdn.com%2Frss_feed.xml').respond(200, MOCK_DATA.allBlogData.data);

    SitemapCtrl = $controller('SitemapCtrl', {
      $scope: scope
    });

    scope.blogData = MOCK_DATA.allBlogData.data;

    $httpBackend.flush();

  }));


  it('Test to make sure that tags are created from blog content', function () {

    var categories = _.pluck(MOCK_DATA.allBlogData.data, 'category');

    Object.keys(categories).forEach(function (key) {

      expect(scope.blogTags).toContain(categories[key]);

    });

  });

});