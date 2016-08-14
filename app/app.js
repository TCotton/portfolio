'use strict';

/**
 * This entire site is coded in AngularJS. Inspect the code on GitHub: https://github.com/TCotton/portfolio
 */

angular.module('portfolioApp.blogAdminService', []);
angular.module('portfolioApp.blogAdminController', []);
angular.module('portfolioApp.blogCommentsController', []);
angular.module('portfolioApp.blogCommentsDirective', []);
angular.module('portfolioApp.blogCommentsService', []);
angular.module('portfolioApp.blogPagesController', []);
angular.module('portfolioApp.blogPagesDirective', []);
angular.module('portfolioApp.blogPagesService', []);
angular.module('portfolioApp.blogPagesFilter', []);
angular.module('portfolioApp.blogSidebarController', []);
angular.module('portfolioApp.contractController', []);
angular.module('portfolioApp.contractService', []);
angular.module('portfolioApp.footerController', []);
angular.module('portfolioApp.footerService', []);
angular.module('portfolioApp.homepageDirective', []);
angular.module('portfolioApp.miscDirective', []);
angular.module('portfolioApp.sideProjectsController', []);
angular.module('portfolioApp.angularReact', []);
angular.module('portfolioApp.sitemapController', []);
angular.module('portfolioApp.wordProjectsController', []);

angular.module('portfolioApp', [
  'portfolioApp.blogAdminService',
  'portfolioApp.blogAdminController',
  'portfolioApp.blogCommentsDirective',
  'portfolioApp.blogCommentsService',
  'portfolioApp.blogPagesController',
  'portfolioApp.blogPagesDirective',
  'portfolioApp.blogPagesService',
  'portfolioApp.blogPagesFilter',
  'portfolioApp.blogSidebarController',
  'portfolioApp.contractController',
  'portfolioApp.contractService',
  'portfolioApp.footerController',
  'portfolioApp.footerService',
  'portfolioApp.homepageDirective',
  'portfolioApp.miscDirective',
  'portfolioApp.sideProjectsController',
  'portfolioApp.angularReact',
  'portfolioApp.sitemapController',
  'portfolioApp.wordProjectsController',
  'AppConstants',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAria',
  'HashBangURLs',
  'portfolioAppConfig',
  'jmdobry.angular-cache',
  'underscore',
  'momentLibrary',
  'helperFunctions',
  'requestTimeout',
  'react',
  'detectLocalStorage',
  'ngOpbeat',
  'appTemplates'
]).config(function($routeProvider, $httpProvider, $opbeatProvider) {

  // Needed for CORS
  // http://better-inter.net/enabling-cors-in-angular-js/
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $opbeatProvider.config({
    orgId: '55aec660d5204d32b2b3bfb7a1980e0a',
    appId: 'a7a0e96ae4'
  });

  $routeProvider
    .when('/', {
      templateUrl: 'homepage/main.html',
      title: 'The portfolio and blog of web developer Andy Walpole'
    })
    .when('/work-projects', {
      templateUrl: 'work-projects/my_work.html',
      title: 'Noteworthy work projects from the past 18 months',
      controller: 'WorkPageCtrl as WorkProjPageCtrl'
    })
    .when('/work-projects/:workPage', {
      templateUrl: 'work-projects/work_page.html',
      controller: 'WorkPageCtrl as WorkProjPageCtrl'
    })
    .when('/side-projects', {
      templateUrl: 'side-projects/side_projects.html',
      title: 'Noteworthy personal side projects from the past couple of years',
      controller: 'ProjectsPageCtrl as ProjPageCtrl'
    })
    .when('/side-projects/:projectsPage', {
      templateUrl: 'side-projects/projects_page.html',
      controller: 'ProjectsPageCtrl as ProjPageCtrl'
    })
    .when('/about-me', {
      templateUrl: 'about-me/about_me.html',
      title: 'Skills and CV'
    })
    .when('/contact-me', {
      templateUrl: 'contact/contact_me.html',
      controller: 'FormCtrl as AdminFormCtrl',
      title: 'Contact form'
    })
    .when('/blog/', {
      templateUrl: 'blog-pages/blog.html',
      controller: 'BlogCtrl as BlogIndexCtrl',
      title: 'blog unblock - the blog of web developer Andy Walpole'
    })
    .when('/blog/:blogId/:blogPage', {
      templateUrl: 'blog-pages/blog_page.html',
      controller: 'BlogArticleCtrl as BlogArticlePageCtrl'
    })
    .when('/category/:category', {
      templateUrl: 'blog-pages/blog_category.html',
      controller: 'BlogCatController as BlogCatPageController'
    })
    .when('/login', {
      templateUrl: 'blog-admin/login.html',
      controller: 'LoginCtrl as AdminLogin',
      title: 'Admin login form'
    })
    .when('/admin/', {
      templateUrl: 'blog-admin/admin.html',
      title: 'Admin area'
    })
    .when('/admin/user-details', {
      templateUrl: 'blog-admin/user_details.html',
      controller: 'UserDetailsCtrl as AdminUserDetailsCtrl',
      title: 'Admin area - add, edit or delete users with admin privileges'
    })
    .when('/admin/blog-details', {
      templateUrl: 'blog-admin/blog_details.html',
      controller: 'EditBlogCtrl as AdminEditBlogCtrl',
      title: 'Admin area - edit or delete blog posts'
    })
    .when('/admin/add-blog', {
      templateUrl: 'blog-admin/add_blog.html',
      controller: 'AddBlogCtrl as AdminAddBlogCtrl',
      title: 'Admin area - add new blog articles'
    })
    .when('/admin/blog-comments', {
      templateUrl: 'blog-admin/comment_details.html',
      controller: 'CommentAdminCtrl as AdminCommentAdminCtrl',
      title: 'Admin area - edit blog comments'
    })
    .when('/sitemap', {
      templateUrl: 'sitemap/html_sitemap.html',
      controller: 'SitemapCtrl',
      title: 'Sitemap'
    })
    .otherwise({
      redirectTo: '/404',
      templateUrl: 'misc/404.html'
    });
  /** Solution to make server side code accept data submitted with angularjs via POST
   * Use x-www-form-urlencoded Content-Type
   * **/
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  /*jshint maxcomplexity:8 */

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function(obj) {
    var query = '';
    var name;
    var value;
    var fullSubName;
    var subName;
    var subValue;
    var innerObj;
    var i;

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
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];

});