/**
 * Created by awalpole on 09/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var LoginCtrl = function ($rootScope, $scope, $log, $location, MongoUserService) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.MongoUserService = MongoUserService;
    this.$location = $location;

    /** Local scope
     * **/
    this.$scope.login = {};
    this.$scope.zipRegex = /(?!.*)/;
    this.$scope.submitted = false;


  };

  LoginCtrl.$inject = ['$rootScope', '$scope', '$log', '$location', 'MongoUserService', '$rootScope'];

  /** Admin log-in page
   * **/
  LoginCtrl.prototype.submitLoginForm = function (isValid) {

    this.$scope.submitted = true;
    this.$scope.messages = {};
    this.$scope.messages.error = null;

    // check to make sure the form is completely valid
    if (isValid) {

      var user = {
        'name': this.$scope.login.name,
        'password': this.$scope.login.password
      };

      var returnedPromise = this.MongoUserService.findUsers(user);

      returnedPromise.then(function (value) {

        console.log(value);

        if(value.data !== 'null') {

          sessionStorage.setItem('logginIn', value.data);
          this.$rootScope.userid = value.data;
          this.$location.path('/admin/');

        } else {

          this.$scope.messages.error = 'There seems to be an issue with your username or password';

        }

      }.bind(this), function (value) {

        this.$log.warn('Failure: UserDetailsCtrl.deleteUser');
        this.$log.warn(value);

      }.bind(this));

    }

  };

  app.controller('LoginCtrl', LoginCtrl);

}());
