/**
 * Created by awalpole on 06/05/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.blogAdminController');

  /** Declare private method variable names
   * **/

  /**
   * @description Admin access to blog comments
   * @param $scope
   * @param MongoCommentService
   * @param $log
   * @constructor
   */
  var CommentAdminCtrl = function ($scope, MongoCommentService, $log) {

    this.$scope = $scope;
    this.$log = $log;
    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'MongoCommentService', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: MongoCommentService
    });

    this.$scope.comments = null;

  };

  CommentAdminCtrl.prototype.getComments = function () {

    var returnedPromise = this.MongoCommentService.getComments();

    returnedPromise.then(function (result) {

      if (_.isObject(result.data)) {

        this.$scope.comments = result.data;

      }

    }.bind(this), function (result) {

      this.$log.warn('Failure: CommentAdminCtrl.getComments');
      this.$log.warn(result);

    }.bind(this));

  };

  CommentAdminCtrl.prototype.deleteComment = function (data) {

    var returnedPromise = this.MongoCommentService.deleteComment(data._id);

    returnedPromise.then(function (value) {

      if (value.data) {

        // update page again
        this.getComments();

      }

    }.bind(this), function (value) {

      this.$log.warn('Failure: CommentAdminCtrl.deleteComment()');
      this.$log.warn(value);

    }.bind(this));

  };

  CommentAdminCtrl.prototype.publishComment = function (data) {

    var formData = {
      id: data._id,
      published: data.published !== true || false
    };

    var returnedPromise = this.MongoCommentService.editComment(formData);

    returnedPromise.then(function (value) {

      if (value.data) {

        // update page again
        this.getComments();

      }

    }.bind(this), function (value) {

      this.$log.warn('Failure: CommentAdminCtrl.publishComment');
      this.$log.warn(value);

    }.bind(this));


  };

  CommentAdminCtrl.$inject = ['$scope', 'MongoCommentService', '$log'];

  app.controller('CommentAdminCtrl', CommentAdminCtrl);

}());

