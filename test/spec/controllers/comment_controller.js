/**
 * Created by awalpole on 05/05/2014.
 */
'use strict';
describe('Controller: AddBlogCtrl as AdminAddBlogCtrl', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var BlogCommentCtrl;

  beforeEach(module('portfolioApp.controllers', 'testConstants', 'portfolioApp.services'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    BlogCommentCtrl = $controller('CommentCtrl as BlogCommentCtrl', {
      $scope: scope
    });

    scope.commentFormData = MOCK_DATA.commentDetails;

  }));

  iit('After submission of blog of local scope form fields will be null: BlogCommentCtrl.submitComment()', function () {

    expect(scope.commentFormData.name).toBe(MOCK_DATA.commentDetails.name);
    expect(scope.commentFormData.email).toBe(MOCK_DATA.commentDetails.email);
    expect(scope.commentFormData.url).toBe(MOCK_DATA.commentDetails.url);
    expect(scope.commentFormData.message).toBe(MOCK_DATA.commentDetails.message);

    //$httpBackend.expect('POST', '/api/blog/add').respond(200);

    scope.$apply(function () {
      BlogCommentCtrl.submitComment(true);
    });

   // $httpBackend.flush();

    expect(scope.commentFormData.name).toBe(null);
    expect(scope.commentFormData.email).toBe(null);
    expect(scope.commentFormData.url).toBe(null);
    expect(scope.commentFormData.message).toBe(null);
    expect(scope.commentBlogFormSubmit).toBe(false);

  });


});
