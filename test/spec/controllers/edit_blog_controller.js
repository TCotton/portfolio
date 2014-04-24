'use strict';
describe('Controller: EditBlogCtrl as AdminEditBlogCtrl', function () {

  beforeEach(module('portfolioApp', 'testConstants'));

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var AdminEditBlogCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    AdminEditBlogCtrl = $controller('EditBlogCtrl as AdminEditBlogCtrl', {
      $scope: scope
    });

  }));

  it('Retrieve blog posts from the mongoDb database: AdminEditBlogCtrl.getBlogs()', function () {

    $httpBackend.expect('GET', '/api/blog/get').respond(200, MOCK_DATA.allBlogData.data);

    scope.$apply(function () {
      AdminEditBlogCtrl.getBlogs();
    });

    $httpBackend.flush();

    expect(scope.blogContent).toEqual(MOCK_DATA.allBlogData.data);

  });


});