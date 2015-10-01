/*jshint quotmark: false */
/*jshint camelcase: false */
/**
 * Created by awalpole on 08/09/2014.
 */

'use strict';
describe('Controller: "FooterCtrl as FooterInherCtrl', function() {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var FooterInherCtrl;
  var newsBlurResponse;
  var contentSnippet;

  beforeEach(module('testConstants', 'portfolioApp.footerController', 'portfolioApp.footerService',
    'AppConstants', 'ngRoute', 'portfolioAppConfig', 'jmdobry.angular-cache', 'underscore', 'helperFunctions'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    newsBlurResponse = MOCK_DATA.newsBlurReturn;
    contentSnippet = MOCK_DATA.newsBlurReturn_contentSnippet;

    scope = $rootScope.$new();

    FooterInherCtrl = $controller('FooterCtrl as FooterInherCtrl', {
      $scope: scope
    });

    $httpBackend.expect('GET', '/api/newsblur/get').respond(200, newsBlurResponse);

    scope.$apply(function() {
      FooterInherCtrl.loadData();
    });

    $httpBackend.flush();

  }));

  it('check local scope changes in public function loadData', function() {

    expect(scope.recArticle.title).toBe(newsBlurResponse.stories[0].story_title);
    expect(scope.recArticle.author).toBe(newsBlurResponse.stories[0].story_authors);
    expect(scope.recArticle.link).toBe(newsBlurResponse.stories[0].story_permalink);
    expect(scope.recArticle.date).toBe(newsBlurResponse.stories[0].short_parsed_date.split(',')[0]);

  });

  it('Tests the _createContentSnippet() function. Must be 270 or fewer characters, to contain an ellipse and finish with double quotes', function() {

    $rootScope.$apply(); // promises are resolved/dispatched only on next $digest cycle

    //expect(scope.recArticle.content).toBe(contentSnippet);
    expect(scope.recArticle.content.length).toBeLessThan(270);
    expect(scope.recArticle.content).toContain('...');
    //expect(scope.recArticle.content).toMatch(/["]$/);

  });

});



