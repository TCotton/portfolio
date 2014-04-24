'use strict';
describe('Controller: AddBlogCtrl as AdminAddBlogCtrl', function () {

  beforeEach(module('portfolioApp', 'testConstants'));

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var AdminAddBlogCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    AdminAddBlogCtrl = $controller('AddBlogCtrl as AdminAddBlogCtrl', {
      $scope: scope
    });

    scope.addBlogFormData = MOCK_DATA.blogArticle;

  }));

  it('After submission of blog of local scope form fields will be null', function () {

    expect(scope.addBlogFormData.title).toBe(MOCK_DATA.blogArticle.title);
    expect(scope.addBlogFormData.author).toBe(MOCK_DATA.blogArticle.author);
    expect(scope.addBlogFormData.category).toBe(MOCK_DATA.blogArticle.category);
    expect(scope.addBlogFormData.content).toBe(MOCK_DATA.blogArticle.content);

    $httpBackend.expect('POST', '/api/blog/add').respond(200);

    scope.$apply(function () {
      AdminAddBlogCtrl.addBlog(true);
    });

    $httpBackend.flush();

    expect(scope.addBlogFormData.title).toBe(null);
    expect(scope.addBlogFormData.author).toBe(null);
    expect(scope.addBlogFormData.category).toBe(null);
    expect(scope.addBlogFormData.content).toBe(null);
    expect(scope.addBlogFormSubmit).toBe(false);

  });

});