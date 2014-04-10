/**
 * Created by awalpole on 09/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var LoginCtrl = function ($rootScope, $scope, $log) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    this.$scope.login = {};
    this.$scope.zipRegex = /(?!.*)/;
    this.$scope.submitted = false;

  };

  LoginCtrl.$inject = ['$rootScope', '$scope', '$log'];

  LoginCtrl.prototype.submitLoginForm = function(isValid) {

    this.$scope.submitted = true;

    // check to make sure the form is completely valid
    if (isValid) {


      /** TODO query database for user, if successful give them a cookie and redirect them to the admin index page **/
      console.log(this.$scope.login);
    }

  };

  app.controller('LoginCtrl', LoginCtrl);

}());
