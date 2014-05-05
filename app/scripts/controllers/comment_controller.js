/**
 * Created by awalpole on 05/05/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  /** Declare private method variable names
   * **/
  var CommentCtrl = function ($scope) {

    this.$scope = $scope;

    this.$scope.commentBlogFormSubmit = false;

  };

  CommentCtrl.prototype.submitComment = function(isValid) {

    this.$scope.commentBlogFormSubmit = true;


    if(isValid) {

      console.log('valid');

    }


  };

  CommentCtrl.$inject = ['$scope'];

  app.controller('CommentCtrl', CommentCtrl);

}());