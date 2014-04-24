'use strict';
describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp', 'testConstants'));

  var AdminFormCtrl;
  var scope;
  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var formDataSuccess = {'success': 'true', 'message': 'Thank you for taking the time to fill out the form. I will contact you as soon as I can!'};
  var formData = {successMessage: null, successMessageDisable: null, name: 'Andy Walpole', email: 'andy_walpole@btopenworld.com', message: 'A message here'};

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();
    AdminFormCtrl = $controller('FormCtrl as AdminFormCtrl', {
      $scope: scope
    });
  }));

  iit('Checks that scope changes to true after data is passed to the submitContactForm method', function () {

    scope.contact = {};
    scope.contact.name = formData.name;
    scope.contact.email = formData.email;
    scope.contact.message = formData.message;
    scope.contact.successMessage = formData.successMessage;
    scope.contact.successMessageDisable = formData.successMessageDisable;

    $httpBackend.expect('POST', '/api/sendmail').respond(200, formDataSuccess);

    scope.$apply(function () {
      AdminFormCtrl.submitContactForm(true);
    });

    $httpBackend.flush();

    expect(scope.contact.name).toBe(null);
    expect(scope.contact.email).toBe(null);
    expect(scope.contact.message).toBe(null);
    expect(scope.contact.successMessage).toContain(formDataSuccess.message);
    expect(scope.contact.successMessageDisable).toContain(formDataSuccess.success);

    expect(scope.submitted).toBe(false);

  });

});
