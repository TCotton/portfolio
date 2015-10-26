/**
 * Created by andywalpole on 08/04/2014.
 */

'use strict';
describe('Controller: ProjPageCtrl', function() {

  // load the controller's module
  beforeEach(module(
    'portfolioApp.sideProjectsController',
    'portfolioApp.angularReact',
    'testConstants',
    'underscore',
    'react',
    'AppConstants',
    'ngRoute',
    'portfolioAppConfig',
    'jmdobry.angular-cache',
    'fastclick'
  ));

  var ProjPageCtrl;
  var scope;
  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $location;
  var $route;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$location_, _$route_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $route = _$route_;

    $rootScope.currentPage = 'http://localhost:9000/#!/side-projects/pennybooks';

    scope = $rootScope.$new();

    ProjPageCtrl = $controller('ProjectsPageCtrl as ProjPageCtrl', {
      $scope: scope
    });

    scope.$apply(function() {
      ProjPageCtrl.findData();
    });

  }));

  it('Checks that local scope is changed when penny books page is loaded', function() {

    expect(scope.title).toEqual(MOCK_DATA.sideProjects.pages.pennybooks.title);
    expect(scope.summary).toEqual(MOCK_DATA.sideProjects.pages.pennybooks.summary);
    expect(scope.details).toEqual(MOCK_DATA.sideProjects.pages.pennybooks.details);
    expect(scope.code).toEqual(MOCK_DATA.sideProjects.pages.pennybooks.code);
    expect(scope.workImage).toEqual(MOCK_DATA.sideProjects.pages.pennybooks.workImage);

  });

  it('Checks that the navigation has a prev and next link', function() {

    expect(scope.prevPage).toEqual(MOCK_DATA.sideProjects.pages.lightning.internalUrl);
    expect(scope.nextPage).toEqual(MOCK_DATA.sideProjects.pages['mq-keyframes'].internalUrl);

  });

});