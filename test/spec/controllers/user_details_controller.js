/**
 * Created by awalpole on 09/04/2014.
 */

'use strict';
describe('Controller: UserDetailsCtrl as AdminUserDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp', 'testConstants'));

  var AdminUserDetailsCtrl;
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
    AdminUserDetailsCtrl = $controller('UserDetailsCtrl as AdminUserDetailsCtrl', {
      $scope: scope
    });
  }));

  it('Checks that scope changes to true after data is passed to the AdminUserDetailsCtrl.submitAddUserForm method', function () {

    scope.$apply(function(){
      AdminUserDetailsCtrl.submitAddUserForm(MOCK_DATA.loginController);
    });

    expect(scope.submitted).toBe(true);

  });

});