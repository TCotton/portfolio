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
