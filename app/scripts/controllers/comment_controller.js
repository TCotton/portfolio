/**
 * Created by awalpole on 05/05/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  /** Declare private method variable names
   * **/
  var CommentCtrl = function ($scope, $rootScope, MongoCommentService, $log) {

    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$log = $log;
    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'MongoCommentService', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: MongoCommentService
    });

    this.$scope.commentBlogFormSubmit = false;
    this.$scope.commentFormData = {};

    // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
    this.$scope.commentFormData.blogId = $rootScope.currentPage.substring($rootScope.currentPage.indexOf('/#!/') + 9, $rootScope.currentPage.indexOf('/#!/') + 15);

  };

  CommentCtrl.prototype.submitComment = function(isValid) {

    this.$scope.commentBlogFormSubmit = true;

    if(isValid) {

      var returnedData = this.MongoCommentService.addBlogPost(this.$scope.addBlogFormData);

      returnedData.then(function () {

        this.$scope.formSuccess = 'You have successfully submitted a blog comment';

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

  CommentCtrl.$inject = ['$scope', '$rootScope', 'MongoCommentService', '$log'];

  app.controller('CommentCtrl', CommentCtrl);

}());