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
  var $httpBackend;
  var $q;
  var userObect = {'_id':{'$oid':'5345510de4b0bbfbddeb1d94'},'name':'AndyW','password':'revolution','$$hashKey':'005'};

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    $httpBackend.expect('GET', MOCK_DATA.mongoDBUrl).respond(200);

    AdminUserDetailsCtrl = $controller('UserDetailsCtrl as AdminUserDetailsCtrl', {
      $scope: scope
    });

    $httpBackend.expect('POST', MOCK_DATA.API.).respond(200, MOCK_DATA.adminUsers);

  }));

  it('Checks that scope changes to true after data is passed to the AdminUserDetailsCtrl.submitAddUserForm method and that the deferred promise is returned', function () {

    var deferred = $q.defer();
    var promise = deferred.promise;

    promise.then(function(value) { scope.allUsers = value; });
    expect(scope.allUsers).toBe(null);

    deferred.resolve(MOCK_DATA.adminUsers);

    expect(scope.allUsers).toBe(null);

    $rootScope.$apply();

    scope.$apply(function(){
      AdminUserDetailsCtrl.submitAddUserForm(MOCK_DATA.loginController);
    });

    expect(scope.addUserSubmit.submitted).toBe(true);
    expect(scope.formSuccess).toBe(null);
    expect(scope.allUsers).toEqual(MOCK_DATA.adminUsers);

  });

  it('Checks that the local scope changes after the user clicks to edit a users details: AdminUserDetailsCtrl.editUser()', function () {

    scope.$apply(function(){
      AdminUserDetailsCtrl.editUser(userObect);
    });

    expect(scope.editThisUser).toBe(true);
    expect(scope.editUser.name).toBe(userObect.name);
    expect(scope.editUser.password).toBe(userObect.password);
    expect(scope.editUser._id.$oid).toEqual(userObect._id.$oid);

  });

});