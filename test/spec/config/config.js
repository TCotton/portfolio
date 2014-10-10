'use strict';
describe('Config: Config', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var $rootScope, $httpBackend, $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$location_) {

    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $location = _$location_;

  }));

  describe('Describe: Checks that $rootScope.pageChange is true after page change', function () {

    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('homepage/main.html')
          .respond(200, 'main HTML');
      }
    ));

    it('Checks that $rootScope.pageChange is true after page change', function () {
      $location.path('/');
      $rootScope.$digest();
      $rootScope.$broadcast('$routeChangeSuccess', {});
      expect($rootScope.pageChange).toEqual(true);
    });


  });

});

