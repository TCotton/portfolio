/**
 * Created by awalpole on 09/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');

  /** Declare variable names for private functions
   * **/

  var _userQuery;

  var LoginCtrl = function ($rootScope, $scope, $log, UsersMongoDB, $location) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.UsersMongoDB = UsersMongoDB;
    this.$location = $location;

    /** Local scope
     * **/
    this.$scope.login = {};
    this.$scope.zipRegex = /(?!.*)/;
    this.$scope.submitted = false;

    /** Check services to see if user is registered
     * **/
    _userQuery = function () {

      return this.UsersMongoDB.query(this.$scope.login,  {fields: {name: 1, password: 1} }).then(function (queryResult) {

        // The then function here is an opportunity to modify the response
        // The return value gets picked up by the then in the controller.

        return queryResult;

      });

    }.bind(this);

  };

  LoginCtrl.$inject = ['$rootScope', '$scope', '$log', 'UsersMongoDB', '$location'];

  /** Admin log-in page
   * **/
  LoginCtrl.prototype.submitLoginForm = function (isValid) {

    this.$scope.submitted = true;
    this.$scope.messages = {};
    this.$scope.messages.success = null;
    this.$scope.messages.error = null;

    // check to make sure the form is completely valid
    if (isValid) {

      _userQuery().then(function(response) {

        if(_.isEmpty(response)){

          this.$scope.messages.error = 'There seems to be an issue with your username or password';

        } else {

          sessionStorage.setItem('logginIn', 'true');
          this.$location.path('/admin/');

        }

      }.bind(this), function(reason) {
        this.$log.warn('Failure: ');
        this.$log.warn(reason);
      }.bind(this));
    }

  };

  app.controller('LoginCtrl', LoginCtrl);

}());
