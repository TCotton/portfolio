'use strict';

angular.module('portfolioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTouch',
    'localization',
    'fastBind.bindOnce',
    'fastBind.bindAttrOnce',
    'AppConstants'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/my-work', {
        templateUrl: 'views/my_work.html'
      })
      .when('/side-projects', {
        templateUrl: 'views/side_projects.html'
      })
      .when('/about-me', {
        templateUrl: 'views/about_me.html'
      })
      .when('/contact-me', {
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
