'use strict';
describe('Routes test', function () {
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

  describe('index route', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/main.html')
          .respond(200, 'main HTML');
      }
    ));

    it('should load the index page on successful load of /', function () {
      location.path('/');
      rootScope.$digest(); // call the digest loop
      expect(route.current.controller).toBe('MainCtrl');
    });

  });

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
      expect(route.current.controller).toBe('FormCtrl');
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
      expect(route.current.controller).toBe('BlogCtrl');
    });

  });

  describe('blog page route', function () {
    beforeEach(inject(
      function ($httpBackend) {
        $httpBackend.expectGET('views/blog_page.html')
          .respond(200, 'blog HTML');
      }
    ));

    it('should load the blog page on successful load of /blog/books-helped-become-professional-web-developer?id=182013', function () {
      location.path('/blog/books-helped-become-professional-web-developer?id=182013');
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

});
