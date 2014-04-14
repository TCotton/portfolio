/**
 * Created by awalpole on 31/03/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var FormCtrl = function ($scope, PostFormService) {

    this.$scope = $scope;
    this.PostFormService = PostFormService;

    // declare scope

    this.$scope.contact = {};
    this.$scope.comments = {};
    /* Used in the hidden field spam trap */
    this.$scope.zipRegex = /(?!.*)/;
    this.$scope.submitted = false;
    this.$scope.contact.successMessage = null;
    this.$scope.contact.successMessageDisable = null;

  };

  FormCtrl.$inject = ['$scope', 'PostFormService'];

  /** Submit form and display message to user
   * Also delete form model values and disable the submit button
   * **/

  FormCtrl.prototype.submitContactForm = function (isValid) {

    this.$scope.submitted = true;

    // check to make sure the form is completely valid
    if (isValid) {

      var promise = this.PostFormService.submitForm(this.$scope.contact);

      promise.then(function(value) {

        if(value.data.success) {

          this.$scope.contact.successMessage = value.data.message;
          this.$scope.contact.successMessageDisable = value.data.success;

          this.$scope.submitted = false;

          this.$scope.contact.name = null;
          this.$scope.contact.email = null;
          this.$scope.contact.message = null;

        }

      }.bind(this), function() {

        this.$scope.$log('Error: FormCtrl.submitContactForm');

      }.bind(this));
    }
  };

  app.controller('FormCtrl', FormCtrl);

}());

