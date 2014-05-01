/**
 * Created by andywalpole on 08/04/2014.
 */

'use strict';
describe('Controller: WorkPageCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp.controllers', 'AppConstants', 'ngRoute'));

  var WorkPageCtrl;
  var scope;
  var $controller;
  var $rootScope;
  var WORK;
  var $httpBackend;
  var $location;
  var $route;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _WORK_, _$httpBackend_, _$location_, _$route_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    WORK = _WORK_;
    $httpBackend = _$httpBackend_;
    $location = _$location_;
    $route = _$route_;
  }));


  it('Checks that local scope is changed when thomson reuters japan page is loaded', function () {

    expect($route.current).toBeUndefined();

    $location.path('/work-projects/thomson-reuters-japan');
    $httpBackend.expectGET('views/work_page.html').respond(200);

    scope = $rootScope.$new();

    $rootScope.$digest();

    WorkPageCtrl = $controller('WorkPageCtrl', {
      $scope: scope
    });

    $rootScope.$digest();

    expect(scope.title).toEqual(WORK.thomsonreuters.title);
    expect(scope.summary).toEqual(WORK.thomsonreuters.summary);
    expect(scope.details).toEqual(WORK.thomsonreuters.details);
    expect(scope.code).toEqual(WORK.thomsonreuters.code);
    expect(scope.company).toEqual(WORK.thomsonreuters.company);
    expect(scope.workImage).toEqual(WORK.thomsonreuters.workImage);

  });

  it('Checks that the navigation has a prev and next link', function () {

    expect($route.current).toBeUndefined();

    $location.path('/work-projects/thomson-reuters-japan');
    $httpBackend.expectGET('views/work_page.html').respond(200);

    scope = $rootScope.$new();

    $rootScope.$digest();

    WorkPageCtrl = $controller('WorkPageCtrl', {
      $scope: scope
    });


    $rootScope.$digest();

    expect(scope.prevPage).toEqual(WORK.blinkbox.internalUrl);
    expect(scope.nextPage).toEqual(WORK.lawstudent.internalUrl);

  });


});