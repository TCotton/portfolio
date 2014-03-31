/**
 * Created by awalpole on 31/03/2014.
 */
'use strict';

angular.module('portfolioApp').controller('FormCtrl', ['$scope', function ($scope) {

  $scope.contact = {};
  $scope.comments = {};

  $scope.submitContactForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };

}]);
