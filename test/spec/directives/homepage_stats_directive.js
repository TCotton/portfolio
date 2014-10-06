/**
 * Created by awalpole on 30/08/2014.
 */

'use strict';

describe('Directive: Slider', function () {

  var element, scope, $compile, $rootScope, $timeout, $interval, $httpBackend, MOCK_DATA;

  beforeEach(module('portfolioApp.homepageDirective', 'ngSanitize', 'AppConstants', 'testConstants'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_, _$interval_, _$httpBackend_, _MOCK_DATA_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $interval = _$interval_;
    $timeout = _$timeout_;
    scope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    MOCK_DATA = _MOCK_DATA_;

    element = angular.element('<div id="homepage-stats" class="clearfix" data-homepage-stats-directive>' +
      '<span data-ng-repeat="statsBlock in stats track by $index">' +
      '<header class="front-page-bottom-header" data-ng-bind-html="statsBlock.header"></header>' +
      '<section class="front-page-bottom-text" data-ng-bind-html="statsBlock.section"></section>' +
      '</span></div>');

    $httpBackend.expect('GET', 'views/homepage_stats.html').respond(200);

    scope.stats = MOCK_DATA.STATS;
    scope.stats.block1.header = '1975';
    $compile(element)(scope);
    scope.$digest();
    $httpBackend.flush();

  }));

  // I SURRENDER!! I CANNOT MAKE THE NG-REPEAT WORK WITH THE MOCK DATA
  // WHY!!!
  // THE ANSWER MUST LIE IN HOW THE NG-REPEAT IS EMBEDDED DIRECTLY IN THE DIRECTIVE
  // IN THE TEMPLATE THIS IS INCLUDED WITH templateUrl

/*
  it('To test some funky stuff', function () {

    alert(MOCK_DATA.STATS);


   alert(element.text());

    */
/* expect(element.text()).toContain(SLIDER.slider1.title);
     expect(element.text()).toContain(SLIDER.slider1.text);*//*


  });

*/

});