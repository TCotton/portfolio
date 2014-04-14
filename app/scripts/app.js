'use strict';

/**
 * This entire site is coded in AngularJS. Inspect the code on GitHub: https://github.com/TCotton/portfolio
 */
angular.module('portfolioApp', ['AppConstants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngTouch', 'ngAnimate', 'HashBangURLs', 'portfolioAppConfig', 'portfolioAppFilters', 'mongolabResourceHttp', 'DBConstants' ])
  .config(function ($routeProvider, $httpProvider) {
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
        controller: 'FormCtrl as AdminFormCtrl'
      })
      .when('/blog/', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/:blogPage', {
        templateUrl: 'views/blog_page.html',
        controller: 'BlogArticleCtrl'
      })
      .when('/login', {
        templateUrl: 'views/admin/login.html',
        controller: 'LoginCtrl as AdminLogin'
      })
      .when('/admin/user-details', {
        templateUrl: 'views/admin/user_details.html',
        controller: 'UserDetailsCtrl as AdminUserDetailsCtrl'
      })
      .when('/admin/blog-details', {
        templateUrl: 'views/admin/blog_details.html',
        controller: 'EditBlogCtrl as AdminEditBlogCtrl'
      })
      .when('/admin/add-blog', {
        templateUrl: 'views/admin/add_blog.html',
        controller: 'AddBlogCtrl as AdminAddBlogCtrl'
      })
      .when('/admin/', {
        templateUrl: 'views/admin/admin.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    /** Solution to make server side code accept data submitted with angularjs via POST
     * **/

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function (obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

      for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      }

      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];

  });
