/**
 * Created by awalpole on 04/04/2014.
 */
'use strict';

describe('Controller: BlogCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp', 'testConstants'));

  var BlogCtrl;
  var scope;
  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var CONFIG;
  var FeedService;
  var $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _CONFIG_, _FeedService_, _$location_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    CONFIG = _CONFIG_;
    FeedService = _FeedService_;
    $location = _$location_;

    var MockFeedService = {
      returnedRSS: function returnedRSS() {
        var retVal = MOCK_DATA.returnedRSS;
        return {then: function (fn) {
          fn(retVal);
        }
        };
      }
    };

    scope = $rootScope.$new();
    BlogCtrl = $controller('BlogCtrl', {
      $scope: scope,
      FeedService: MockFeedService
    });

  }));


  describe('Run BlogCtrl with FeedService dependency', function () {
    beforeEach(function () {
      spyOn(FeedService, 'returnedRSS').andCallThrough();
    });

    it('Test that there is an SEO safe URL in the article object - only contains alpha numeric characters and hyphens', function () {

      expect(scope.oldBlogPosts[0].url).not.toEqual(null);
      expect(scope.oldBlogPosts[0].url).toMatch(new RegExp(/[\-a-z0-9]/g));

    });

    it('Test that the total articles count is a digit and not null', function () {

      expect(scope.totalArticles).not.toEqual(null);

    });

    it('Test the pagination size', function() {

      // $scope.paginationTotalPages is 0 - why?

    });

    it('Test the next next scope', function() {

      // test for changing in local scope next when pagination is used for navigation

    });

    it('Test the previous prev scope', function() {

      // test for changing in local scope prev when pagination is used for navigation

    });


  });




});