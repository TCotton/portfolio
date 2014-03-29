'use strict';
describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var HeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeaderCtrl = $controller('HeaderCtrl', {
      $scope: scope
    });
  }));

//  // there are five links in the main navigation
//  it('scope.navigation should equal 5 because there are five items in the header navigation', function () {
//    expect(scope.navigation.items.length).toBe(5);
//  });
//
//  it('scope.homepage should equal the homepage url', function () {
//    expect(scope.homepage).toContain('/#!/');
//  });

});
