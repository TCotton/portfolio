/**
 * Created by awalpole on 05/05/2014.
 */
'use strict';
describe('Controller: CommentCtrl as BlogCommentCtrl', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var BlogCommentCtrl;
  var returnedCommentData;

  beforeEach(module('portfolioApp.controllers', 'testConstants', 'portfolioApp.services'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    $rootScope.currentPage = 'http://localhost:9000/#!/blog/139938/css-reset-starter-kit';

    BlogCommentCtrl = $controller('CommentCtrl as BlogCommentCtrl', {
      $scope: scope
    });

    scope.commentFormData = MOCK_DATA.commentDetails;

    returnedCommentData = [{'name':'John Williams','email':'andy_walpole@btopenworld.com','url':'http://portfolio-12501.onmodulus.net/#!/','message':'This is a message here','blogId':'139938','published':true,'publishedDate':'2014-05-19T17:54:14.384Z','_id':'537a4546fd2831630749de1b','__v':0},{'name':'John Williams','email':'andy_walpole@btopenworld.com','url':'http://andywalpole.me/#!/blog/137153/books-helped-become-professional-web-developer','message':'This is another comment message here','blogId':'139938','published':true,'publishedDate':'2014-05-19T17:55:09.537Z','_id':'537a457dfd2831630749de1c','__v':0}];

  }));

  it('After submission of comment of local scope form fields will be null: BlogCommentCtrl.submitComment()', function () {

    expect(scope.commentFormData.name).toBe(MOCK_DATA.commentDetails.name);
    expect(scope.commentFormData.email).toBe(MOCK_DATA.commentDetails.email);
    expect(scope.commentFormData.url).toBe(MOCK_DATA.commentDetails.url);
    expect(scope.commentFormData.message).toBe(MOCK_DATA.commentDetails.message);

    $httpBackend.expect('POST', '/api/comment/add').respond(200);

    scope.$apply(function () {
      BlogCommentCtrl.submitComment(true);
    });

    $httpBackend.flush();

    expect(scope.commentFormData.name).toBe(null);
    expect(scope.commentFormData.email).toBe(null);
    expect(scope.commentFormData.url).toBe(null);
    expect(scope.commentFormData.message).toBe(null);
    expect(scope.commentBlogFormSubmit).toBe(false);

  });

  it('Retrieve all comments for blog article: BlogCommentCtrl.retreiveComment()', function () {

    expect(scope.publishComments).toBe(null);

    $httpBackend.expect('GET', '/api/comment/getPublished').respond(200, returnedCommentData);

    scope.$apply(function () {
      BlogCommentCtrl.retreiveComment();
    });

    $httpBackend.flush();

    expect(scope.publishComments).toEqual(returnedCommentData);
    
  });

  // check that spam trap works
  // check validation of

});
