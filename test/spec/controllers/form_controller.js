'use strict';
describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp', 'testConstants'));

  var FormCtrl;
  var scope;
  var $controller;
  var $rootScope;
  var MOCK_DATA;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;

    scope = $rootScope.$new();
    FormCtrl = $controller('FormCtrl', {
      $scope: scope
    });
  }));

  it('Checks that scope changes to true after data is passed to the submitContactForm method', function () {

    scope.$apply(function(){
      scope.submitContactForm(MOCK_DATA.formController);
    });

    expect(scope.submitted).toBe(true);

  });

});
