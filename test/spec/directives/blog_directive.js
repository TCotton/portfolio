/**
 * Created by andywalpole on 07/04/2014.
 */

'use strict';

describe('Directive: blogBlockDirective', function () {

  var element, scope, $compile, SLIDER, $rootScope, $timeout, $interval, MOCK_DATA;

  beforeEach(module('portfolioApp.blogPagesDirective', 'testConstants', 'AppConstants', 'ngSanitize'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _SLIDER_, _$timeout_, _$interval_, _MOCK_DATA_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    SLIDER = _SLIDER_;
    $interval = _$interval_;
    $timeout = _$timeout_;
    MOCK_DATA = _MOCK_DATA_;
    scope = $rootScope;

    element = angular.element('<div data-blog-block-directive blog="blog"></div>');
    scope.blog = {};
    scope.blog.contentSnippet = MOCK_DATA.returnedRSS.data.responseData.feed.entries[0].contentSnippet;
    scope.blog.title = MOCK_DATA.returnedRSS.data.responseData.feed.entries[0].title;
    $compile(element)(scope);
    scope.$digest();
    $timeout.flush();

  }));


  iit('Test HTML elements in blogBlockDirective after scope change', function () {

    expect(element.text()).toContain(MOCK_DATA.returnedRSS.data.responseData.feed.entries[0].contentSnippet);
    expect(element.text()).toContain(MOCK_DATA.returnedRSS.data.responseData.feed.entries[0].title);

  });


});
