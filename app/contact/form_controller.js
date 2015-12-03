'use strict';
class FormCtrl {
  /**
   * @description Contact me form submission
   * @param $scope {object}
   * @param PostFormService {object}
   * @param $sanitize {function}
   * @param _ {function}
   * @param $timeout {function}
   * @constructor
   */
  constructor($scope, PostFormService, $sanitize, _, $timeout) {

    this.$scope = $scope;
    this.$sanitize = $sanitize;
    this._ = _;
    this.$timeout = $timeout;

    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'PostFormService', {
      value: PostFormService
    });

    // declare scope

    this.$scope.contact = {};
    this.$scope.comments = {};
    /* Used in the hidden field spam trap */
    this.$scope.zipRegex = /(?!.*)/;
    this.$scope.submitted = false;
    this.$scope.contact.successMessage = null;
    this.$scope.contact.successMessageDisable = null;

  }

  /** Submit form and display message to user
   * Also delete form model values and disable the submit button
   * **/

  submitContactForm(isValid) {

    let formData;
    let promise;

    this.$scope.submitted = true;

    // check to make sure the form is completely valid
    if (isValid) {

      // sanitise and remove naughty spam stuff from email
      // TODO: move to server
      formData = this._.object(this._.map(this.$scope.contact, (value, key) => {

        value = this.$sanitize(value).trim();

        return [key, value];

      }));

      promise = this.PostFormService.submitForm(formData);

      promise.then((value) => {

        if (value.data.success) {

          this.$scope.contact.successMessage = value.data.message;
          this.$scope.contact.successMessageDisable = value.data.success;

          this.$scope.submitted = false;

          this.$scope.contact.name = null;
          this.$scope.contact.email = null;
          this.$scope.contact.message = null;

        }

      }, () => {

        this.$log('Error: FormCtrl.submitContactForm');

      });

    } else {

      this.$scope.formFailure = 'The form has not been submitted because of errors. Please review the form error messages and click submit again';
      this.$timeout(function() {
        document.querySelector('.comment-form-failure').focus();
      }, 0);

    }

  }
}

FormCtrl.$inject = ['$scope', 'PostFormService', '$sanitize', '_', '$timeout'];

angular.module('portfolioApp.contractController').controller('FormCtrl', ['$scope', 'PostFormService', '$sanitize', '_', '$timeout', function($scope, PostFormService, $sanitize, _, $timeout) {
  return new FormCtrl($scope, PostFormService, $sanitize, _, $timeout);
}]);

