/**
 * Created by awalpole on 07/04/2014.
 */

'use strict';

describe('Testing the BlogDataService', function () {

  var FeedService;
  var BlogDataService;
  var $httpBackend;
  var MOCK_DATA;
  var CONFIG;
  var $q;
  var deferred;

  beforeEach(module('portfolioApp', 'testConstants'));

  beforeEach(inject(function (_$httpBackend_, _FeedService_, _MOCK_DATA_, _CONFIG_, _BlogDataService_, _$q_) {
    $httpBackend = _$httpBackend_;
    FeedService = _FeedService_;
    MOCK_DATA = _MOCK_DATA_;
    CONFIG = _CONFIG_;
    BlogDataService = _BlogDataService_;
    $q = _$q_;
    deferred = $q.deferred;
  }));

  afterEach(function () {
//    $httpBackend.verifyNoOutstandingExpectation();
//    $httpBackend.verifyNoOutstandingRequest();
  });


});