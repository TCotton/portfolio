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

  it('Test for local scope changes after successful edit of blog: AdminEditBlogCtrl.editBlog()', function () {

    scope.editBlogFormData = {};
    scope.editBlogFormData.title = MOCK_DATA.editedBlogDataSubmit.title;
    scope.editBlogFormData.author = MOCK_DATA.editedBlogDataSubmit.author;
    scope.editBlogFormData.category = MOCK_DATA.editedBlogDataSubmit.category;
    scope.editBlogFormData.content = MOCK_DATA.editedBlogDataSubmit.content;

    $httpBackend.expect('PUT', '/api/blog/update').respond(200);

    scope.$apply(function () {
      AdminEditBlogCtrl.editBlog(true);
    });

    $httpBackend.expect('GET', '/api/blog/get').respond(200, MOCK_DATA.allBlogData.data);

    $httpBackend.flush();

    expect(scope.formSuccess).toContain('You have successfully updated the blog article');
    expect(scope.editBlogFormData.title).toBe(null);
    expect(scope.editBlogFormData.author).toBe(null);
    expect(scope.editBlogFormData.category).toBe(null);
    expect(scope.editBlogFormData.content).toBe(null);
    expect(scope.displayForm).toBe(false);

  });


  it('After clicking to delete blog article local scope will change with value of blog article to be deleted: AdminAddBlogCtrl.addBlog()', function () {

    expect(scope.displayPopup).toBe(false);
    expect(scope.dataToDelete.title).not.toBeDefined();
    expect(scope.dataToDelete.author).not.toBeDefined();
    expect(scope.dataToDelete.category).not.toBeDefined();
    expect(scope.dataToDelete.content).not.toBeDefined();

    scope.$apply(function () {
      AdminEditBlogCtrl.deleteArticle(MOCK_DATA.editedBlogDataSubmit);
    });

    expect(scope.displayPopup).toBe(true);
    expect(scope.dataToDelete.title).toContain(MOCK_DATA.editedBlogDataSubmit.title);
    expect(scope.dataToDelete.author).toContain(MOCK_DATA.editedBlogDataSubmit.author);
    expect(scope.dataToDelete.category).toContain(MOCK_DATA.editedBlogDataSubmit.category);
    expect(scope.dataToDelete.content).toContain(MOCK_DATA.editedBlogDataSubmit.content);

  });

  it('The user can change their mind and not delete the article when the popup appears: AdminAddBlogCtrl.hidePopup()', function () {

    scope.$apply(function () {
      AdminEditBlogCtrl.hidePopup();
    });

    expect(scope.displayPopup).toBe(false);

  });


});