/**
 * Created by awalpole on 19/05/2014.
 */

'use strict';
describe('Controller: CommentAdminCtrl as AdminCommentAdminCtrl', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var AdminCommentAdminCtrl;
  var returnedBlogComments;
  var publishedBlogComment;

  beforeEach(module('portfolioApp.controllers', 'testConstants', 'portfolioApp.services'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    AdminCommentAdminCtrl = $controller('CommentAdminCtrl as AdminCommentAdminCtrl', {
      $scope: scope
    });

    returnedBlogComments = [
      {'name': 'John Williams', 'email': 'andy_walpole@btopenworld.com', 'url': 'http://portfolio-12501.onmodulus.net/#!/', 'message': 'This is a message here', 'blogId': '139938', 'published': true, 'publishedDate': '2014-05-19T17:54:14.384Z', '_id': '537a4546fd2831630749de1b', '__v': 0},
      {'name': 'John Williams', 'email': 'andy_walpole@btopenworld.com', 'url': 'http://andywalpole.me/#!/blog/137153/books-helped-become-professional-web-developer', 'message': 'This is another comment message here', 'blogId': '139938', 'published': true, 'publishedDate': '2014-05-19T17:55:09.537Z', '_id': '537a457dfd2831630749de1c', '__v': 0}
    ];

    publishedBlogComment = {'name':'John Huskin','email':'andy_walpole@btopenworld.com','url':'http://andywalpole.me/#!/blog/137153/books-helped-become-professional-web-developer','message':'This is a blog comment','blogId':'139938','published':true,'publishedDate':'2014-05-19T18:57:23.034Z','_id':'537a541344c9ef1f4e60e40e','__v':0};

  }));

  it('Retrieve all blog comments and change scope: AdminCommentAdminCtrl.getComments()', function () {

    expect(scope.comments).toBe(null);

    $httpBackend.expect('GET', '/api/comment/get').respond(200, returnedBlogComments);

    scope.$apply(function () {
      AdminCommentAdminCtrl.getComments();
    });

    $httpBackend.flush();

    expect(scope.comments).toEqual(returnedBlogComments);

  });

  /** Error:
   *
   *  Error: Unexpected request: DELETE /api/comment/delete/undefined
   *  Expected DELETE /api/comment/delete/q2498rhqwef
   *
   * **/

  /*iit('Delete comment and change scope: AdminCommentAdminCtrl.deleteComment()', function () {

   var commentId = 'q2498rhqwef';

   $httpBackend.expect('DELETE', '/api/comment/delete/' + commentId).respond(200, '1');

   scope.$apply(function () {
   AdminCommentAdminCtrl.deleteComment(commentId);
   });

   $httpBackend.expect('GET', '/api/comment/get').respond(200, returnedBlogComments);

   $httpBackend.flush();

   });*/

  // finish tomorrow

/*  iit('Publish comment and change scope: AdminCommentAdminCtrl.publishComment()', function () {

    expect(scope.comments).toBe(null);

    $httpBackend.expect('GET', '/api/comment/get').respond(200, returnedBlogComments);

    scope.$apply(function () {
      AdminCommentAdminCtrl.getComments();
    });

    $httpBackend.flush();

    expect(scope.comments).toEqual(returnedBlogComments);
  });*/

});

