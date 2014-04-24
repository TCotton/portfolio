/**
 * Created by awalpole on 04/04/2014.
 */
'use strict';

describe('Controller: BlogCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp', 'testConstants'));

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var BlogCtrl;



  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$interval_, _$httpBackend_, _$controller_, _$rootScope_, _MOCK_DATA_, _CONFIG_, _FeedService_, _$location_, _BlogDataService_, _$q_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    BlogCtrl = $controller('BlogCtrl', {
      $scope: scope
    });


  }));




});