'use strict';
describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var FormCtrl;
  var scope;
  var $controller;
  var $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;

    scope = $rootScope.$new();
    FormCtrl = $controller('FormCtrl', {
      $scope: scope
    });
  }));


  it('The form should except a name', function () {

  });

  it('The form should except a email address', function () {

  });

  it('The form should except a message', function () {

  });

  it('The form should not expect any text in the zipcode', function () {

  });





});
