'use strict';
describe('Unit: Templates - logged in', function() {

  // checks template routes

  var $httpBackend, location, rootScope, route, $angularCacheFactory;
  var userID = '20f4q3foiawnfaoi';

  beforeEach(module('portfolioApp'));

  beforeEach(inject(function(_$rootScope_, _$route_, _$httpBackend_, _$location_, _$angularCacheFactory_) {
    location = _$location_;
    rootScope = _$rootScope_;
    route = _$route_;
    $httpBackend = _$httpBackend_;
    $angularCacheFactory = _$angularCacheFactory_;
    $angularCacheFactory('authCache', {
      maxAge: 86400000,
      deleteOnExpire: 'aggressive',
      storageMode: 'sessionStorage'
    });
    $angularCacheFactory.get('authCache').put('logginIn', userID);
    rootScope.userid = userID;
  }));

  it('loads the home template at /', function() {
    $httpBackend.expectGET('homepage/main.html')
      .respond(200);
    location.path('/');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads work projects page at /work-projects', function() {
    $httpBackend.expectGET('work-projects/my_work.html')
      .respond(200);
    location.path('/work-projects');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads about me page at /about-me', function() {
    $httpBackend.expectGET('about-me/about_me.html')
      .respond(200);
    location.path('/about-me');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads side projects page at /side-projects', function() {
    $httpBackend.expectGET('side-projects/side_projects.html').respond(200);
    location.path('/side-projects');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads contact me page at /contact-me', function() {
    $httpBackend.expectGET('contact/contact_me.html')
      .respond(200);
    location.path('/contact-me');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads blog page at /blog/', function() {
    $httpBackend.expectGET('blog-pages/blog.html')
      .respond(200);
    location.path('/blog/');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads individual blog page at /blog/-an-article', function() {
    $httpBackend.expectGET('blog-pages/blog_page.html')
      .respond(200);
    location.path('/blog/136324/using-autoload-in-object-orientated-wordpress-plugin');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads individual work page at /work-projects/thomson-reuters-japan', function() {
    $httpBackend.expectGET('work-projects/work_page.html')
      .respond(200);
    location.path('/work-projects/thomson-reuters-japan');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads individual side projects page at /side-projects/pennybooks', function() {
    $httpBackend.expectGET('side-projects/projects_page.html')
      .respond(200);
    location.path('/side-projects/pennybooks');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads login page at /login', function() {
    $httpBackend.expectGET('blog-admin/login.html')
      .respond(200);
    location.path('/login');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads admin user details page at /admin/user-details', function() {
    $httpBackend.expectGET('blog-admin/user_details.html')
      .respond(200);
    location.path('/admin/user-details');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads admin add blog page at /admin/blog-details', function() {
    $httpBackend.expectGET('blog-admin/blog_details.html')
      .respond(200);
    location.path('/admin/blog-details');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads admin edit blog page at /admin/add-blog', function() {
    $httpBackend.expectGET('blog-admin/add_blog.html')
      .respond(200);
    location.path('/admin/add-blog');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads admin edit comments page at /admin/blog-comments', function() {
    $httpBackend.expectGET('blog-admin/comment_details.html')
      .respond(200);
    location.path('/admin/blog-comments');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads sitemap page at /sitemap', function() {
    $httpBackend.expectGET('sitemap/html_sitemap.html')
      .respond(200);
    location.path('/sitemap');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads category page at /blog/css', function() {
    $httpBackend.expectGET('blog-pages/blog_category.html')
      .respond(200);
    location.path('/category/css');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

});

describe('Unit: Templates - not logged in', function() {

  // checks template routes
  var $httpBackend, location, rootScope, route;

  beforeEach(module('portfolioApp'));

  beforeEach(inject(function(_$rootScope_, _$route_, _$httpBackend_, _$location_) {
    location = _$location_;
    rootScope = _$rootScope_;
    route = _$route_;
    $httpBackend = _$httpBackend_;
  }));

  it('loads login page when navigating to /admin/blog-comments because user is not logged in', function() {
    $httpBackend.expectGET('blog-admin/comment_details.html')
      .respond(200);
    $httpBackend.expectGET('blog-admin/login.html')
      .respond(200);
    location.path('/admin/blog-comments');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads login page when navigating to /admin/user-details because user is not logged in', function() {
    $httpBackend.expectGET('blog-admin/user_details.html')
      .respond(200);
    $httpBackend.expectGET('blog-admin/login.html')
      .respond(200);
    location.path('/admin/user-details');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads login page when navigating to /admin/add-blog because user is not logged in', function() {
    $httpBackend.expectGET('blog-admin/add_blog.html')
      .respond(200);
    $httpBackend.expectGET('blog-admin/login.html')
      .respond(200);
    location.path('/admin/add-blog');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });

  it('loads login page when navigating to /admin/blog-details because user is not logged in', function() {
    $httpBackend.expectGET('blog-admin/blog_details.html')
      .respond(200);
    $httpBackend.expectGET('blog-admin/login.html')
      .respond(200);
    location.path('/admin/blog-details');
    rootScope.$digest(); // call the digest loop
    rootScope.$broadcast('$routeChangeSuccess', {});
    rootScope.$digest(); // call the digest loop
  });


});
