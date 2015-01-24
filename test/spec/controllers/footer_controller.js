/*jshint quotmark: false */
/*jshint camelcase: false */
/**
 * Created by awalpole on 08/09/2014.
 */

'use strict';
describe('Controller: "FooterCtrl as FooterInherCtrl', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var FooterInherCtrl;
  var newsBlurResponse;
  var deferred;
  var webWorkerFS;
  var contentSnippet;

  contentSnippet = '"Presented at at the Google WebPerf Special (London WebPerf Group), August 26th 2014. Efficient JavaScript webapps need to be fluid and fast. Any app with significant user interaction needs to consider how to effectively keep memory usage down because if ... "';

  beforeEach(module('testConstants', 'portfolioApp.footerController', 'portfolioApp.footerService', 'AppConstants', 'ngRoute', 'portfolioAppConfig', 'jmdobry.angular-cache', 'underscore', 'webWorkerFunctionService'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_, _webWorkerFS_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    webWorkerFS = _webWorkerFS_;
    newsBlurResponse = MOCK_DATA.newsBlurReturn;

    deferred = $q.defer();
    deferred.resolve(contentSnippet); //  always resolved, you can do it from your spec

    // jasmine 2.0
    spyOn(webWorkerFS, 'f').and.returnValue(deferred.promise);

    scope = $rootScope.$new();

    FooterInherCtrl = $controller('FooterCtrl as FooterInherCtrl', {
      $scope: scope
    });

    $httpBackend.expect('GET', '/api/newsblur/get').respond(200, newsBlurResponse);

    scope.$apply(function () {
      FooterInherCtrl.loadData();
    });

    $httpBackend.flush();

  }));

  it('check local scope changes in public function loadData', function () {

    expect(scope.recArticle.title).toBe(newsBlurResponse.stories[0].story_title);
    expect(scope.recArticle.author).toBe(newsBlurResponse.stories[0].story_authors);
    expect(scope.recArticle.link).toBe(newsBlurResponse.stories[0].story_permalink);
    expect(scope.recArticle.date).toBe(newsBlurResponse.stories[0].short_parsed_date.split(',')[0]);

  });

  it('Tests the _createContentSnippet() function. Must be 270 or fewer characters, to contain an ellipse and finish with double quotes', function () {

    var result;

    webWorkerFS.f('createContentSnippetFooter', [newsBlurResponse.stories[0]['story_content']]).then(function(returnFromPromise) {
      result = returnFromPromise;
    });

    $rootScope.$apply(); // promises are resolved/dispatched only on next $digest cycle

    expect(result).toBe(contentSnippet);
    expect(scope.recArticle.content.length).toBeLessThan(270);
    expect(scope.recArticle.content).toContain('...');
    expect(scope.recArticle.content).toMatch(/["]$/);

  });

});



