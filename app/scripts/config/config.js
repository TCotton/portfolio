'use strict';

angular.module('portfolioAppConfig', []).run(['$rootScope', '$window', '$location', '$angularCacheFactory', '$route', function ($rootScope, $window, $location, $angularCacheFactory, $route) {

  var track = function () {
    /* jshint ignore:start */
    $window.ga('send', 'pageview', {
      'page': $location.path()
    });
    /* jshint ignore:end */
  };

  $rootScope.$on('$viewContentLoaded', track);

  $rootScope.pageChange = false;
  $rootScope.currentPage = $location.absUrl();

  $rootScope.$on('$routeChangeSuccess', function () {
    if ($route.current.$$route) {
      $rootScope.pageTitle = $route.current.$$route.title;
      $rootScope.status = null;
    } else {
      $rootScope.pageTitle = 'Not Found';
      $rootScope.status = '404';
    }
  });

  $rootScope.$on('$locationChangeStart', function () {

    /** Value used in the tablet / mobile dropdown menu code
     * Dropdown menu disappears on page change if it is down
     * **/
    if (!$rootScope.pageChange) {
      $rootScope.pageChange = true;
    }

    $rootScope.currentPage = $location.absUrl();

    $rootScope.canonical = 'https://andywalpole.me/#!' + $location.path();

    $rootScope.hideFooter = $rootScope.currentPage.indexOf('blog') !== -1;

    // basic login detection service
    var admin = new RegExp('\/admin\/');
    var currentPage = $rootScope.currentPage.toString();

    if (!$angularCacheFactory.get('authCache')) {

      $angularCacheFactory('authCache', {
        maxAge: 86400000,
        deleteOnExpire: 'aggressive',
        storageMode: 'sessionStorage'
      });

    }

    if (!$angularCacheFactory.get('blogCache')) {

      $angularCacheFactory('blogCache', {
        maxAge: 86400000,
        deleteOnExpire: 'aggressive',
        storageMode: 'sessionStorage'
      });

    }

    if (admin.test(currentPage)) {

      if (!$angularCacheFactory.get('authCache').get('logginIn') || $angularCacheFactory.get('authCache').get('logginIn') !== $rootScope.userid) {

        $location.path('/login');

      }
    }


    // every time the page reloads make sure it loads from the top
    // clicking links on the middle of the page results in opening a new page in the same spot

    // temp solution
    // this also forces the browser to load from the top when navigating back
    $window.scrollTo(0, 0);

  });

}]);

/**
 * Url modules
 */
//get the module from creating an angular module
angular.module('HashBangURLs', []).config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
}]);
angular.module('ngAnimate', []).config(['$animateProvider', function ($animateProvider) {
  $animateProvider.classNameFilter(/\animate-/);
}]);


