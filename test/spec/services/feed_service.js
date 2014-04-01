/**
 * Created by awalpole on 01/04/2014.
 */

'use strict';

describe('Testing the FeedService', function () {

  var FeedService;
  var $httpBackend;
  var MOCK_DATA;
  var CONFIG;

  beforeEach(module('portfolioApp', 'testConstants'));

  beforeEach(inject(function (_$httpBackend_, _FeedService_, _MOCK_DATA_, _CONFIG_) {
    $httpBackend = _$httpBackend_;
    FeedService = _FeedService_;
    MOCK_DATA = _MOCK_DATA_;
    CONFIG = _CONFIG_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('FeedService test - retrieve the RSS feed using JSNOP $http', inject(function () {

    $httpBackend.expect('JSONP', CONFIG.JSONP_GOOGLE_API + encodeURIComponent(CONFIG.RSS_FEED_LINK)).respond(200, MOCK_DATA.returnedRSS);

    var result = null;

    FeedService.returnedRSS().then(function (data) {

      result = data;

    });

    $httpBackend.flush();

    // check the data
    expect(result).toBeDefined();
    expect(result.status).toBe(200);
    expect(Object.keys(result.data.data.responseData.feed.entries)).toEqual(Object.keys(MOCK_DATA.returnedRSS.data.responseData.feed.entries));


  }));

});
