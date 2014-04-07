'use strict';

/**
 * This entire site is coded in AngularJS. Inspect the code on GitHub: https://github.com/TCotton/portfolio
 */
angular.module('portfolioApp', ['AppConstants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngTouch', 'ngAnimate', 'localization', 'fastBind.bindOnce', 'fastBind.bindAttrOnce', 'HashBangURLs', 'portfolioAppConfig', 'LocalStorageModule' ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/work-projects', {
        templateUrl: 'views/my_work.html'
      })
      .when('/work-projects/:workPage', {
        templateUrl: 'views/work_page.html'
      })
      .when('/side-projects', {
        templateUrl: 'views/side_projects.html'
      })
      .when('/about-me', {
        templateUrl: 'views/about_me.html'
      })
      .when('/contact-me', {
        templateUrl: 'views/contact_me.html',
        controller: 'FormCtrl'
      })
      .when('/blog/', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/:blogPage', {
        templateUrl: 'views/blog_page.html',
        controller: 'BlogArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
