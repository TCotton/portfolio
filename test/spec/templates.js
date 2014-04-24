'use strict';
describe('Unit: Templates', function () {

  // checks template routes

  var $httpBackend, location, rootScope, route, authCache;
  var userID = '20f4q3foiawnfaoi';

  beforeEach(module('portfolioApp'));

  beforeEach(inject(function (_$rootScope_, _$route_, _$httpBackend_, _$location_, _authCache_) {
    location = _$location_;
    rootScope = _$rootScope_;
    route = _$route_;
    $httpBackend = _$httpBackend_;
    authCache = _authCache_;
    authCache.put('logginIn', userID);
    rootScope.userid = userID;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('loads the home template at /', function () {
    $httpBackend.expectGET('views/main.html')
      .respond(200);
    location.path('/');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads work projects page at /work-projects', function () {
    $httpBackend.expectGET('views/my_work.html')
      .respond(200);
    location.path('/work-projects');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads about me page at /about-me', function () {
    $httpBackend.expectGET('views/about_me.html')
      .respond(200);
    location.path('/about-me');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads side projects page at /side-projects', function () {
    $httpBackend.expectGET('views/side_projects.html')
      .respond(200);
    location.path('/side-projects');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads contact me page at /contact-me', function () {
    $httpBackend.expectGET('views/contact_me.html')
      .respond(200);
    location.path('/contact-me');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads blog page at /blog/', function () {
    $httpBackend.expectGET('views/blog.html')
      .respond(200);
    location.path('/blog/');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads individual blog page at /blog/-an-article', function () {
    $httpBackend.expectGET('views/blog_page.html')
      .respond(200);
    location.path('/blog/136324/using-autoload-in-object-orientated-wordpress-plugin');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads individual work page at /work-projects/thomson-reuters-japan', function () {
    $httpBackend.expectGET('views/work_page.html')
      .respond(200);
    location.path('/work-projects/thomson-reuters-japan');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads individual side projects page at /side-projects/pennybooks', function () {
    $httpBackend.expectGET('views/projects_page.html')
      .respond(200);
    location.path('/side-projects/pennybooks');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads login page at /login', function () {
    $httpBackend.expectGET('views/admin/login.html')
      .respond(200);
    location.path('/login');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads admin user details page at /admin/user-details', function () {
    $httpBackend.expectGET('views/admin/user_details.html')
      .respond(200);
    location.path('/admin/user-details');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

  it('loads admin add blog page at /admin/add-blog', function () {


    $httpBackend.expectGET('views/admin/add_blog.html')
      .respond(200);
    location.path('/admin/add-blog');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

});
