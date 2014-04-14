/**
 * Created by awalpole on 04/04/2014.
 */
'use strict';

describe('Controller: BlogCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp', 'testConstants'));

  //var BlogCtrl;
  var scope;
  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var CONFIG;
  var FeedService;
  var $location;
  var BlogDataService;
  var $q;
  var deferred;
  var BlogCtrl;
  var $httpBackend;
 // var retreiveDataDeferred;
  var $interval;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$interval_, _$httpBackend_, _$controller_, _$rootScope_, _MOCK_DATA_, _CONFIG_, _FeedService_, _$location_, _BlogDataService_, _$q_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    CONFIG = _CONFIG_;
    $location = _$location_;
    BlogDataService = _BlogDataService_;
    FeedService = _FeedService_;
    $q = _$q_;
    deferred = $q.deferred;
    $httpBackend = _$httpBackend_;
    $interval = _$interval_;

    scope = $rootScope.$new();

    var MockFeedService = {
      returnedRSS: function returnedRSS() {
        var retVal = MOCK_DATA.returnedRSS;
        return {then: function (fn) {
          fn(retVal);
        }
        };
      }
    };

    spyOn(MockFeedService, 'returnedRSS').andCallThrough();

    $httpBackend.expect('JSONP', CONFIG.JSONP_GOOGLE_API + encodeURIComponent(CONFIG.RSS_FEED_LINK)).respond(200, MOCK_DATA.returnedRSS);

    var MockBlogDataService = {
      retreiveData: function() {
        var retreiveDataDeferred = $q.defer();
        return {
          $promise: retreiveDataDeferred.promise
        };
      }
    };

    spyOn(MockBlogDataService, 'retreiveData').andCallThrough();

    BlogCtrl = $controller('BlogCtrl', {
      $scope: scope
    });

  }));


/*
  describe('Run BlogCtrl with FeedService dependency', function () {
    beforeEach(function () {

      $interval.flush(100);
      $rootScope.$apply();

    });

    it('Test that there is an SEO safe URL in the article object - only contains alpha numeric characters and hyphens', function () {

    });

  });*/


});