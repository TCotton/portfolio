/**
 * Created by awalpole on 11/04/2014.
 */


'use strict';
describe('Controller: SidebarCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp', 'testConstants'));

  var $controller;
  var $rootScope;
  var SidebarCtrl;
  var scope;
  var $q;
  var MOCK_DATA;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _MOCK_DATA_, _$httpBackend_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();

    scope.$parent.$broadcast('blog_posts', MOCK_DATA.returnedRSS.data.responseData.feed.entries);

    spyOn(scope, '$on').andCallThrough();

    SidebarCtrl = $controller('SidebarCtrl', {
      $scope: scope
    });

    scope.$apply();

  }));

/*  iit('something here', function () {

    console.log(scope.blogData);



  });*/


});