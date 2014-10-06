/**
 * Created by awalpole on 09/04/2014.
 */

'use strict';
describe('Controller: LoginCtrl as AdminLogin', function () {


  // load the controller's module
  beforeEach(module('portfolioApp.blogAdminController', 'testConstants', 'portfolioApp.blogAdminService', 'jmdobry.angular-cache'));

  var AdminLogin;
  var scope;
  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $angularCacheFactory;
  var returnUsrData = {'data':'\'creTheSweraqeSW8CunastevUfrezefr\'','status':200,'config':{'method':'POST','transformRequest':[null],'transformResponse':[null],'url':'/api/user/find','data':{'name':'AndyW','password':'aPassword'},'headers':{'Content-Type':'application/x-www-form-urlencoded','Accept':'application/json, text/plain, */*'}}};

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$angularCacheFactory_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $angularCacheFactory = _$angularCacheFactory_;

    $angularCacheFactory('authCache', {
      maxAge: 86400000,
      deleteOnExpire: 'aggressive',
      storageMode: 'sessionStorage'
    });

    scope = $rootScope.$new();
    AdminLogin = $controller('LoginCtrl as AdminLogin', {
      $scope: scope
    });
  }));

  it('Checks that scope changes to true after data is passed to the AdminLogin.submitLoginForm method', function () {

    $httpBackend.expect('POST', '/api/user/find').respond(200, returnUsrData.data);

    scope.$apply(function(){
      AdminLogin.submitLoginForm(true);
    });

    $httpBackend.flush();

    expect(scope.userid).toBe(returnUsrData.data);

  });

  // check validation is working
  // check spam trap is working
  // if possible, create dummy data of users and see if response is correct if username or password is incorrect

});
