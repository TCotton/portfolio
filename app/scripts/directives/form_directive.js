/**
 * Created by awalpole on 31/03/2014.
 */

'use strict';

angular.module('portfolioApp').directive('formDirective', [function () {

  return {
    restrict: 'A',
    controller: function ($scope) {

      $scope.contact = {};
      $scope.comments = {};

      /* Used in the hidden field spam trap */

      $scope.zipRegex = /(?!.*)/;

      $scope.submitted = false;

      $scope.submitContactForm = function(isValid) {

        $scope.submitted = true;

        // check to make sure the form is completely valid
        if (isValid) {
          console.log($scope.contact);
        }

      };

    },
    link: function () {

    }
  };

}]);
