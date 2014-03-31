'use strict';

angular.module('portfolioAppConfig', []).run(['$rootScope', '$window', function ($rootScope, $window) {

  $rootScope.pageChange = false;

  $rootScope.$on('$locationChangeStart', function () {

    if(!$rootScope.pageChange) {
      $rootScope.pageChange = true;
    }

    // every time the page reloads make sure it loads from the top
    // clicking links on the middle of the page results in opening a new page in the same spot

    // temp solution
    // this also forces the browser to load from the top when navigating back
    $window.scrollTo(0,0);

  });

}]);

/**
 * Url modules
 */
//get the module from creating an angular module
angular.module('HashBangURLs', []).config(['$locationProvider', function ($location) {
  $location.hashPrefix('!');
}]);
angular.module('portfolioAppConfig', []).config(['$animateProvider', function ($animateProvider) {
  $animateProvider.classNameFilter(/animated/);
}]);