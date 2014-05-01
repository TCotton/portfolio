/**
 * Created by awalpole on 31/03/2014.
 */

'use strict';

angular.module('portfolioApp.directives').directive('formDirective', [function () {

  return {
    restrict: 'A',
    controller: function ($scope) {

      $scope.contact = {};
      $scope.comments = {};

      /* Used in the hidden field spam trap */

      $scope.zipRegex = /(?!.*)/;

      // $scope.submitted = false;

      $scope.submitContactForm = function (isValid) {

        $scope.submitted = true;

        // check to make sure the form is completely valid
        if (isValid) {

        }

      };

    },
    link: function (scope) {

      scope.submitClicked = function (value) {

        if (value) {

          /** TODO: will not go fragment identifier without cancelling out error messages
           * **/

          //window.location = window.location.href.indexOf('#main-content') === -1 ? window.location.href + '#main-content' : window.location.href;
          //scope.submitted = true;


        }
      };
    }
  };

}]);
