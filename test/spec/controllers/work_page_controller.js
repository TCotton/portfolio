/**
 * Created by andywalpole on 08/04/2014.
 */

'use strict';
describe('Controller: WorkPageCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp.wordProjectsController',
    'portfolioApp.angularReact',
    'testConstants',
    'underscore',
    'react',
    'AppConstants',
    'ngRoute',
    'portfolioAppConfig',
    'jmdobry.angular-cache'
  ));

  var WorkProjPageCtrl;
  var scope;
  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $location;
  var $route;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$location_, _$route_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $route = _$route_;
    $rootScope.currentPage = 'http://localhost:9000/#!/work-projects/thomson-reuters-japan';

    scope = $rootScope.$new();

    WorkProjPageCtrl = $controller('WorkPageCtrl as WorkProjPageCtrl', {
      $scope: scope
    });

    scope.$apply(function() {
      WorkProjPageCtrl.findData();
    });

  }));

  it('Checks that local scope is changed when thomson reuters japan page is loaded', function () {

    expect(scope.title).toEqual(MOCK_DATA.workProjects.pages.thomsonreuters.title);
    expect(scope.summary).toEqual(MOCK_DATA.workProjects.pages.thomsonreuters.summary);
    expect(scope.details).toEqual(MOCK_DATA.workProjects.pages.thomsonreuters.details);
    expect(scope.code).toEqual(MOCK_DATA.workProjects.pages.thomsonreuters.code);
    expect(scope.company).toEqual(MOCK_DATA.workProjects.pages.thomsonreuters.company);
    expect(scope.workImage).toEqual(MOCK_DATA.workProjects.pages.thomsonreuters.workImage);

  });

  it('Checks that the navigation has a prev and next link', function () {

    expect(scope.prevPage).toEqual(MOCK_DATA.workProjects.pages.blinkbox.internalUrl);
    expect(scope.nextPage).toEqual(MOCK_DATA.workProjects.pages.lawstudent.internalUrl);

  });

});