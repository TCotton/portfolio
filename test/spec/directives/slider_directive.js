'use strict';

describe('Directive: Slider', function () {

  var element, scope, $compile, SLIDER, $rootScope, $timeout;

  beforeEach(module('portfolioApp'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _SLIDER_, _$timeout_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    SLIDER = _SLIDER_;
    $timeout = _$timeout_;
    scope = $rootScope;


    element = angular.element('<div data-slider-directive data-slider="slider"></div>');
    $compile(element)($rootScope);
    scope.$digest();
    $timeout.flush();

  }));

  it('Test whether link changes after set interval', function () {

    scope.slider = SLIDER.slider1;

    //apply it to the view.
    scope.$digest();

    //console.log(element.text());
    //console.log(element.html());



   // console.log(element.scope());


    //console.log(element.scope());

    //console.log(element.scope().slider);


   // expect(SLIDER.slider1.title).toContain('Thompson Reuters Japan');

  });
//
//  it('Test whether class changes after set interval', function () {
//
//
//
//  });
//
//  it('Test whether title changes after set interval', function () {
//
//
//  });
//
//  it('Test whether text changes after set interval', function () {
//
//
//  });
//
//  it('Create a test for errors ', function () {
//
//
//  });

});