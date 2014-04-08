/**
 * Created by andywalpole on 08/04/2014.
 */


'use strict';
describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

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

    scope = $rootScope.$new();
    WorkPageCtrl = $controller('WorkPageCtrl', {
      $scope: scope
    });

  }));


  it('Checks that the scope is changed when the right page is loaded', function () {

    expect($route.current).toBeUndefined();
    $httpBackend.expectGET('views/work_page.html').respond(200);
    $location.path('/work-projects/thomson-reuters-japan');
    $rootScope.$digest();
    console.log($route.current);

  });



});