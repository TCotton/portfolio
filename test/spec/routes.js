'use strict';
describe('Routes test with log in', function () {
  // Mock our module in our tests
  beforeEach(module('portfolioApp'));

  var location, route, rootScope, $angularCacheFactory;
  var userID = '20f4q3foiawnfaoi';


  beforeEach(inject(
    function (_$location_, _$route_, _$rootScope_, _$angularCacheFactory_) {
      location = _$location_;
      route = _$route_;
      rootScope = _$rootScope_;
      $angularCacheFactory = _$angularCacheFactory_;
      $angularCacheFactory('authCache', {
        maxAge: 86400000,
        deleteOnExpire: 'aggressive',
        storageMode: 'sessionStorage'
      });
      $angularCacheFactory.get('authCache').put('logginIn', userID);
      rootScope.userid = userID;
    }
  ));

  describe('contact page route', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/contact_me.html')
          .respond(200, 'main HTML');
      }
    ));

    it('should load the contact page on successful load of /contact-me', function () {
      location.path('/contact-me');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('FormCtrl as AdminFormCtrl');
    });

  });

  describe('blog page index route', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/blog.html')
          .respond(200, 'blog HTML');
      }
    ));

    it('should load the blog page on successful load of /blog/', function () {
      location.path('/blog/');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('BlogCtrl as BlogIndexCtrl');
    });

  });

  describe('blog page route', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/blog_page.html')
          .respond(200, 'blog HTML');
      }
    ));

    it('should load the blog page on successful load of /blog/136324/using-autoload-in-object-orientated-wordpress-plugin', function () {
      location.path('/blog/136324/using-autoload-in-object-orientated-wordpress-plugin');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('BlogArticleCtrl');
    });

  });


  describe('individual work page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/work_page.html')
          .respond(200, 'work page HTML');
      }
    ));

    it('should load the work page on successful load of /work-projects/thomson-reuters-japan', function () {
      location.path('/work-projects/thomson-reuters-japan');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('WorkPageCtrl');
    });

  });

  describe('individual side project page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/projects_page.html')
          .respond(200, 'project page HTML');
      }
    ));

    it('should load the side projects page on successful load of /side-projects/pennybooks', function () {
      location.path('/side-projects/pennybooks');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('ProjectsPageCtrl');
    });

  });

  describe('admin login page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/login.html')
          .respond(200, 'login page HTML');
      }
    ));

    it('should load the login page on successful load of /admin/login', function () {
      location.path('/login');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('LoginCtrl as AdminLogin');
    });

  });

  describe('admin user details page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/user_details.html')
          .respond(200, 'user details page HTML');
      }
    ));

    it('should load the admin user details page on successful load of /admin/user-details', function () {
      location.path('/admin/user-details');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('UserDetailsCtrl as AdminUserDetailsCtrl');
    });

  });

  describe('admin blog details page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/blog_details.html')
          .respond(200, 'blog details page HTML');
      }
    ));

    it('should load the admin blog details page on successful load of /admin/user-details', function () {
      location.path('/admin/blog-details');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('EditBlogCtrl as AdminEditBlogCtrl');
    });

  });

  describe('admin add blog page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/add_blog.html')
          .respond(200, 'add blog page HTML');
      }
    ));

    it('should load the admin add blog page on successful load of /admin/add-blog', function () {
      location.path('/admin/add-blog');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('AddBlogCtrl as AdminAddBlogCtrl');
    });

  });

  describe('admin comments page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/comment_details.html')
          .respond(200, 'admin comments HTML');
      }
    ));

    it('should load the admin comments page on successful load of /admin/blog-comments', function () {
      location.path('/admin/blog-comments');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('CommentAdminCtrl as AdminCommentAdminCtrl');
    });

  });

  describe('html sitemap page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/html_sitemap.html')
          .respond(200, 'html sitemap HTML');
      }
    ));

    it('should load the sitemap page on successful load of /sitemap', function () {
      location.path('/sitemap');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('SitemapCtrl');
    });

  });

  describe('Individual category page', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/blog_category.html')
          .respond(200, 'html page category HTML');
      }
    ));

    it('should load the page category CSS on successful load of /blog/css', function () {
      location.path('/blog/css');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('BlogCatController as BlogCatPageController');
    });

  });

});


describe('Routes test without log in', function () {

  // Mock our module in our tests
  beforeEach(module('portfolioApp'));

  var location, route, rootScope;

  beforeEach(inject(
    function (_$location_, _$route_, _$rootScope_) {
      location = _$location_;
      route = _$route_;
      rootScope = _$rootScope_;
    }
  ));

  describe('admin add blog page without loggin in', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/login.html')
          .respond(200, 'login page HTML');
      }
    ));

    it('should load views/admin/login.html if the user navigates to /admin/add-blog without logging in first', function () {
      location.path('/admin/add-blog');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('LoginCtrl as AdminLogin');
    });

  });

  describe('admin blog details page without logging in', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/login.html')
          .respond(200, 'login page HTML');
      }
    ));

    it('should load views/admin/login.html if the user navigates to /admin/blog-details without logging in first', function () {
      location.path('/admin/blog-details');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('LoginCtrl as AdminLogin');
    });

  });

  describe('admin user details page without logging in', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/login.html')
          .respond(200, 'login page HTML');
      }
    ));

    it('should load views/admin/login.html if the user navigates to /admin/user-details without logging in first', function () {
      location.path('/admin/user-details');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('LoginCtrl as AdminLogin');
    });

  });

  describe('admin comments page without logging in', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/admin/login.html')
          .respond(200, 'login page HTML');
      }
    ));

    it('should load the admin comments page on successful load of /admin/blog-comments', function () {
      location.path('/admin/blog-comments');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('LoginCtrl as AdminLogin');
    });

  });


});
