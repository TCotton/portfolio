/**
 * Created by andywalpole on 08/04/2014.
 */
/**
 * Created by andywalpole on 08/04/2014.
 */

'use strict';
describe('Controller: ProjectsPageCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp.controllers'));

  var ProjectsPageCtrl;
  var scope;
  var $controller;
  var $rootScope;
  var PROJECTS;
  var $httpBackend;
  var $location;
  var $route;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _PROJECTS_, _$httpBackend_, _$location_, _$route_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    PROJECTS = _PROJECTS_;
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $route = _$route_;
  }));


  it('Checks that local scope is changed when thomson reuters japan page is loaded', function () {

    expect($route.current).toBeUndefined();

    $location.path('/side-projects/pennybooks');
    $httpBackend.expectGET('views/projects_page.html').respond(200);

    scope = $rootScope.$new();

    $rootScope.$digest();

    ProjectsPageCtrl = $controller('ProjectsPageCtrl', {
      $scope: scope
    });

    $rootScope.$digest();

    expect(scope.title).toEqual(PROJECTS.pennybooks.title);
    expect(scope.summary).toEqual(PROJECTS.pennybooks.summary);
    expect(scope.details).toEqual(PROJECTS.pennybooks.details);
    expect(scope.code).toEqual(PROJECTS.pennybooks.code);
    expect(scope.workImage).toEqual(PROJECTS.pennybooks.workImage);

  });

  it('Checks that the navigation has a prev and next link', function () {

    expect($route.current).toBeUndefined();

    $location.path('/side-projects/pennybooks');
    $httpBackend.expectGET('views/projects_page.html').respond(200);

    scope = $rootScope.$new();

    $rootScope.$digest();

    ProjectsPageCtrl = $controller('ProjectsPageCtrl', {
      $scope: scope
    });

    $rootScope.$digest();

    expect(scope.prevPage).toEqual(PROJECTS.lightning.internalUrl);
    expect(scope.nextPage).toEqual(PROJECTS.twttwt.internalUrl);

  });


});