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

  describe('Run BlogCtrl with FeedService dependency', function () {

    it('Test that there is an SEO safe URL in the article object - only contains alpha numeric characters and hyphens', function () {

      $httpBackend.expect('JSONP', CONFIG.JSONP_GOOGLE_API + encodeURIComponent(CONFIG.RSS_FEED_LINK)).respond(200, MOCK_DATA.returnedRSS);

      //var result = null;

      BlogDataService.retreiveData();

//      deferred.resolve(MOCK_DATA.retreiveData);
//
//      spyOn(BlogDataService, 'retreiveData').andReturn(deferred.promise);

      //spyOn(BlogDataService, 'retreiveData').andCallThrough();

      //$httpBackend.flush();



      //console.log(BlogDataService);

      //$httpBackend.flush();

    });


  });


});