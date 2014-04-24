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
  //var userDetailsReturn = {'data': {'__v': 0, 'name': 'JohnRoad', 'password': '61719d7f2aac2f1a649543a2245444048064dd6d516ae63b3c9c18792fadd0d9ceba7aa1713b2fa690551c96a3f72bf9a374b63b417369f6d21b2b076d61d366', '_id': '5358b892fec18e00008a9585'}, 'status': 200, 'config': {'method': 'POST', 'transformRequest': [null], 'transformResponse': [null], 'url': '/api/users/add', 'data': {'name': 'JohnRoad', 'password': 'revolution'}, 'headers': {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json, text/plain, */*'}}};
  var allUsers = [
    {'name': 'AndyW', 'password': 'ea06f421fe6b8814abeb83478a948448a16cab7a5c7dfce24bcdca8676eb4b6e6204c6a9502eb7b2730c4f2c6ce71c671275425d4da3b12c767353a085a72b22', '_id': '5353e401bea8fa60f05a04fa', '__v': 0},
    {'__v': 0, '_id': '5354ce5c3c2dec290a2db608', 'name': 'JohnJones', 'password': '61719d7f2aac2f1a649543a2245444048064dd6d516ae63b3c9c18792fadd0d9ceba7aa1713b2fa690551c96a3f72bf9a374b63b417369f6d21b2b076d61d366'},
    {'name': 'JohnRoad', 'password': '61719d7f2aac2f1a649543a2245444048064dd6d516ae63b3c9c18792fadd0d9ceba7aa1713b2fa690551c96a3f72bf9a374b63b417369f6d21b2b076d61d366', '_id': '5358b892fec18e00008a9585', '__v': 0}
  ];
  //var newUser = {name: 'JohnRoad', password: 'revolution'};

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    $httpBackend.expect('GET', MOCK_DATA.API.userGet).respond(200, allUsers);

    AdminUserDetailsCtrl = $controller('UserDetailsCtrl as AdminUserDetailsCtrl', {
      $scope: scope
    });

    $httpBackend.flush();

  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  iit('Checks that scope changes to true after data is passed to the AdminUserDetailsCtrl.submitAddUserForm method and that the deferred promise is returned', function () {

    scope.addUser.name = 'JohnRoad';
    scope.addUser.password = 'aPassword';

    $httpBackend.expect('POST', MOCK_DATA.API.usersAdd).respond(200);

    scope.$apply(function () {
      AdminUserDetailsCtrl.submitAddUserForm(true);
    });

    $httpBackend.expect('GET', MOCK_DATA.API.userGet).respond(200, allUsers);

    $httpBackend.flush();

    expect(scope.formSuccess).toContain('You have successfully added a new user');
    expect(scope.addUser.name).toBe(null);
    expect(scope.addUser.password).toBe(null);
    expect(scope.addUserSubmit.submitted).toBe(false);


  });

  /*it('Checks that the local scope changes after the user clicks to edit a users details: AdminUserDetailsCtrl.editUser()', function () {

   scope.$apply(function(){
   AdminUserDetailsCtrl.editUser(userObect);
   });

   expect(scope.editThisUser).toBe(true);
   expect(scope.editUser.name).toBe(userObect.name);
   expect(scope.editUser.password).toBe(userObect.password);
   expect(scope.editUser._id.$oid).toEqual(userObect._id.$oid);

   });*/

});