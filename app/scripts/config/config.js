'use strict';

angular.module('portfolioAppConfig', []).run(function ($rootScope) {

  $rootScope.pageChange = false;

  $rootScope.$on('$locationChangeStart', function () {

    if(!$rootScope.pageChange) {
      $rootScope.pageChange = true;
    }

  });

});

/**
 * Url modules
 */
//get the module from creating an angular module
angular.module('HashBangURLs', []).config(['$locationProvider', function ($location) {
  $location.hashPrefix('!');
}]);