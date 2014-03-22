'use strict';

/**
 * This entire site is coded in AngularJS. Inspect the code on GitHub: https://github.com/TCotton/portfolio
 */
angular.module('portfolioApp', ['AppConstants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngTouch', 'localization', 'fastBind.bindOnce', 'fastBind.bindAttrOnce', 'HashBangURLs' ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/work-projects', {
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
