'use strict';

/**
 * This entire site is coded in AngularJS. Inspect the code on GitHub: https://github.com/TCotton/portfolio
 */
angular.module('portfolioApp', ['AppConstants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngTouch', 'ngAnimate', 'localization', 'HashBangURLs', 'portfolioAppConfig', 'LocalStorageModule', 'portfolioAppFilters', 'mongolabResourceHttp', 'DBConstants' ])
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
        templateUrl: 'views/work_page.html',
        controller: 'WorkPageCtrl'
      })
      .when('/side-projects', {
        templateUrl: 'views/side_projects.html'
      })
      .when('/side-projects/:projectsPage', {
        templateUrl: 'views/projects_page.html',
        controller: 'ProjectsPageCtrl'
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
      .when('/admin/login', {
        templateUrl: 'views/admin/login.html',
        controller: 'LoginCtrl as AdminLogin'
      })
      .when('/admin/user-details', {
        templateUrl: 'views/admin/user_details.html',
        controller: 'UserDetailsCtrl as AdminUserDetailsCtrl'
      })
      .when('/admin/blog-details', {
        templateUrl: 'views/admin/blog_details.html',
        controller: 'BlogDetailsCtrl as AdminBlogDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
