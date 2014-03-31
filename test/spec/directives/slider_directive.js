'use strict';

describe('Directive: Slider', function () {

  var element, scope, $compile, SLIDER, $rootScope, $timeout, $interval;

  beforeEach(module('portfolioApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_, _SLIDER_, _$timeout_, _$interval_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    SLIDER = _SLIDER_;
    $interval = _$interval_;
    $timeout = _$timeout_;
    scope = $rootScope;

    element = angular.element('<div data-slider-directive data-slider="slider"></div>');
    $compile(element)(scope);
    scope.$digest();
    $timeout.flush();

  }));

  it('Test whether local scope is changed and contains title and text of slide', function () {

    scope.$apply(function () {
      scope.slider = SLIDER.slider1;
    });

    expect(element.text()).toContain(SLIDER.slider1.title);
    expect(element.text()).toContain(SLIDER.slider1.text);

  });

  it('Tests whether the class has changed on model change', function () {

    scope.$apply(function () {
      scope.slider = SLIDER.slider1;
    });

    expect(element.hasClass(Object.keys(SLIDER)[0])).toBe(true);

  });


  it('Test if $destroy is working as expected', function () {

    $rootScope.$broadcast('$destroy');
    $rootScope.$digest();

  });

  it('Tests slider directive for possible failures', function () {

    $rootScope.$broadcast('$destroy');
    $rootScope.$digest();

  });

});