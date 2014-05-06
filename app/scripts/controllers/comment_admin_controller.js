/**
 * Created by awalpole on 06/05/2014.
 */

'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  /** Declare private method variable names
   * **/
  var CommentAdminCtrl = function ($scope, $rootScope, MongoCommentService, $log) {

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

    this.$scope.comments = null;

  };

  CommentAdminCtrl.prototype.getComments = function() {

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

  CommentAdminCtrl.$inject = ['$scope', '$rootScope', 'MongoCommentService', '$log'];

  app.controller('CommentAdminCtrl', CommentAdminCtrl);

}());

