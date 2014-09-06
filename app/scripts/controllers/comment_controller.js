/**
 * Created by awalpole on 05/05/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var CommentCtrl = function ($scope, $rootScope, MongoCommentService, $log, $timeout) {

    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$log = $log;
    this.$timeout = $timeout;

    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'MongoCommentService', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: MongoCommentService
    });

    this.$scope.commentBlogFormSubmit = false;
    this.$scope.publishComments = null;
    this.$scope.commentFormData = {};
    this.$scope.zipRegex = /(?!.*)/;

    // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
    this.$scope.commentFormData.blogId = $rootScope.currentPage.substring($rootScope.currentPage.indexOf('/#!/') + 9, $rootScope.currentPage.indexOf('/#!/') + 15);

  };

  CommentCtrl.$inject = ['$scope', '$rootScope', 'MongoCommentService', '$log', '$timeout'];

  CommentCtrl.prototype.retreiveComment = function () {

    var data = {
      blogId: this.$scope.commentFormData.blogId
    };

    var returnedData = this.MongoCommentService.getPubilshedComments(data);

    returnedData.then(function (result) {

      if (!_.isEmpty(result.data)) {

        this.$scope.publishComments = result.data;

      }

    }.bind(this), function (result) {
      this.$log.warn('Failure: CommentCtrl.retreiveComment');
      this.$log.warn(result);
    }.bind(this));

  };

  CommentCtrl.prototype.submitComment = function (isValid) {

    this.$scope.commentBlogFormSubmit = true;

    if (!isValid) {

      this.$scope.formFailure = 'The form has not been submitted because of errors. Please review the form error messages and click submit again';
      this.$timeout(function () {
        document.querySelector('.comment-form-failure').focus();
      }, 0);

    }

    if (isValid) {

      var returnedData = this.MongoCommentService.addComment(this.$scope.commentFormData);

      returnedData.then(function () {

        this.$scope.formFailure = null;
        this.$scope.formSuccess = 'You have successfully submitted a blog comment';
        this.$timeout(function () {
          document.querySelector('.comment-form-success').focus();
        }, 0);

        // reset scope to remove values from input fields
        // loop over form field models
        for (var key in this.$scope.commentFormData) {

          if (this.$scope.commentFormData.hasOwnProperty(key)) {

            this.$scope.commentFormData[key] = null;

          }
        }

        this.$scope.commentBlogFormSubmit = false;

      }.bind(this), function (value) {
        this.$log.warn('Failure: CommentCtrl.submitComment');
        this.$log.warn(value);
      }.bind(this));

    }

  };

  app.controller('CommentCtrl', CommentCtrl);

}());