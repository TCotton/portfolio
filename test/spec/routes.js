'use strict';
describe('Routes test', function () {
  // Mock our module in our tests
  beforeEach(module('portfolioApp'));

  var location, route, rootScope;

  beforeEach(inject(
    function (_$location_, _$route_, _$rootScope_) {
      location = _$location_;
      route = _$route_;
      rootScope = _$rootScope_;
    }
  ));

  describe('index route', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/main.html')
          .respond(200, 'main HTML');
      }
    ));

    it('should load the index page on successful load of /', function () {
      location.path('/');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('MainCtrl');
    });

  });
});
