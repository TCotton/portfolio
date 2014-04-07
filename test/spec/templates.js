'use strict';
describe('Unit: Templates', function () {

  // checks template routes

  var $httpBackend, location, rootScope, route;

  beforeEach(module('portfolioApp'));

  beforeEach(inject(function (_$rootScope_, _$route_, _$httpBackend_, _$location_) {
    location = _$location_;
    rootScope = _$rootScope_;
    route = _$route_;
    $httpBackend = _$httpBackend_;
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
    location.path('/blog/books-helped-become-professional-web-developer?id=182013');
    rootScope.$digest(); // call the digest loop
    $httpBackend.flush();
  });

});
