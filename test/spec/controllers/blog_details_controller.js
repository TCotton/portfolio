/**
 * Created by awalpole on 10/04/2014.
 */

'use strict';
describe('Controller: BlogDetailsCtrl as AdminBlogDetailsCtrl', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var scope;
  var $q;
  var AdminBlogDetailsCtrl;

  // load the controller's module
  beforeEach(module('portfolioApp', 'testConstants'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    AdminBlogDetailsCtrl = $controller('BlogDetailsCtrl as AdminBlogDetailsCtrl', {
      $scope: scope
    });

  }));



});


