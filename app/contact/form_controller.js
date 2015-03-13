/**
 * Created by awalpole on 31/03/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp.contractController');

  /**
   * @description Contact me form submission
   * @param $scope
   * @param PostFormFactory
   * @param $sanitize
   * @param _
   * @constructor
   */
  var FormCtrl = function ($scope, PostFormFactory, $sanitize, _, $timeout) {

    this.$scope = $scope;
    this.$sanitize = $sanitize;
    this._ = _;
    this.$timeout = $timeout;

    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'PostFormFactory', {
      value: PostFormFactory
    });

    // declare scope

    this.$scope.contact = {};
    this.$scope.comments = {};
    /* Used in the hidden field spam trap */
    this.$scope.zipRegex = /(?!.*)/;
    this.$scope.submitted = false;
    this.$scope.contact.successMessage = null;
    this.$scope.contact.successMessageDisable = null;

  };

  FormCtrl.$inject = ['$scope', 'PostFormFactory', '$sanitize', '_', '$timeout'];

  /** Submit form and display message to user
   * Also delete form model values and disable the submit button
   * **/

  FormCtrl.prototype.submitContactForm = function (isValid) {

    var formData;
    var promise;

    this.$scope.submitted = true;

    // check to make sure the form is completely valid
    if (isValid) {

      // sanitise and remove naughty spam stuff from email
      // TODO: move to server
      formData = this._.object(this._.map(this.$scope.contact, function (value, key) {

        value = this.$sanitize(value).trim();

        return [key, value];
      }.bind(this)));


      promise = this.PostFormFactory.submitForm(formData);

      promise.then(function (value) {

        if (value.data.success) {

          this.$scope.contact.successMessage = value.data.message;
          this.$scope.contact.successMessageDisable = value.data.success;

          this.$scope.submitted = false;

          this.$scope.contact.name = null;
          this.$scope.contact.email = null;
          this.$scope.contact.message = null;

        }

      }.bind(this), function () {

        this.$log('Error: FormCtrl.submitContactForm');

      }.bind(this));
    } else {

      this.$scope.formFailure = 'The form has not been submitted because of errors. Please review the form error messages and click submit again';
      this.$timeout(function () {
        document.querySelector('.comment-form-failure').focus();
      }, 0);

    }
  };

  app.controller('FormCtrl', FormCtrl);

}());

