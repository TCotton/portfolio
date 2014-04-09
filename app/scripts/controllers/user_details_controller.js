/**
 * Created by awalpole on 09/04/2014.
 */


/**
 * Created by awalpole on 09/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var UserDetailsCtrl = function ($rootScope, $scope, $log) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    this.$scope.addUser = {};
    this.$scope.submitted = false;

  };

  UserDetailsCtrl.$inject = ['$rootScope', '$scope', '$log'];

  UserDetailsCtrl.prototype.submitAddUserForm = function(isValid) {

    this.$scope.submitted = true;

    // check to make sure the form is completely valid
    if (isValid) {
      console.log(this.$scope.addUser);
    }

  };

  app.controller('UserDetailsCtrl', UserDetailsCtrl);

}());
