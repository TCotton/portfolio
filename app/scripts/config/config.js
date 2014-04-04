'use strict';

angular.module('portfolioAppConfig', []).run(['$rootScope', '$window', '$location', function ($rootScope, $window, $location) {

  $rootScope.pageChange = false;
  $rootScope.currentPage = $location.absUrl();

  $rootScope.$on('$locationChangeStart', function () {

    if(!$rootScope.pageChange) {
      $rootScope.pageChange = true;
    }

    $rootScope.currentPage = $location.absUrl();

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
angular.module('ngAnimate', []).config(['$animateProvider', function ($animateProvider) {
  $animateProvider.classNameFilter(/\animate-/);
}]);