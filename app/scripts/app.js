'use strict';

angular.module('portfolioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
//    'ngTouch',
    'localization',
    'fastBind.bindOnce',
    'fastBind.bindAttrOnce',
    'AppConstants',
    'HashBangURLs'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/my-work.html', {
        templateUrl: 'views/my_work.html'
      })
      .when('/side-projects.html', {
        templateUrl: 'views/side_projects.html'
      })
      .when('/about-me.html', {
        templateUrl: 'views/about_me.html'
      })
      .when('/contact-me.html', {
        templateUrl: 'views/about_me.html'
      })
      .when('/blog/', {
        templateUrl: 'views/blog.html'
      })
      .when('/blog/:blogPage', {
        templateUrl: 'views/blog_page.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
