/**
 * Created by awalpole on 31/03/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp.controllers');

  var FormCtrl = function ($scope, PostFormService, $sanitize) {

    this.$scope = $scope;
    this.$sanitize = $sanitize;

    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'PostFormService', {
      enumerable: false,
      configurable: false,
      writable: false,
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

  };

  FormCtrl.$inject = ['$scope', 'PostFormService', '$sanitize'];

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
      formData = _.object(_.map(this.$scope.contact, function (value, key) {

        value = this.$sanitize(value).trim();

        return [key, value];
      }.bind(this)));

      var _replaceSubstring = function (inSource, inToReplace, inReplaceWith) {

        var outString = inSource;
        while (true) {
          var idx = outString.indexOf(inToReplace);
          if (idx === -1) {
            break;
          }
          outString = outString.substring(0, idx) + inReplaceWith + outString.substring(idx + inToReplace.length);
        }
        return outString;

      };

      promise = this.PostFormService.submitForm(formData);

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
    }
  };

  app.controller('FormCtrl', FormCtrl);

}());

