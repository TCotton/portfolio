/**
 * Created by awalpole on 09/04/2014.
 */


/**
 * Created by awalpole on 09/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var UserDetailsCtrl = function ($rootScope, $scope, $log, UsersMongoDB) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.UsersMongoDB = UsersMongoDB;

    this.$scope.addUser = new UsersMongoDB();
    this.$scope.editUser = {};
    //this.$scope.whatever.submitted = false;
    this.$scope.addUserSubmit = {};
    this.$scope.addUserSubmit.submitted = false;
    this.$scope.allUsers = null;
    this.$scope.editThisUser = null;

    this.listAllUsers();

  };

  UserDetailsCtrl.$inject = ['$rootScope', '$scope', '$log', 'UsersMongoDB'];

  UserDetailsCtrl.prototype.editUser = function () {

    this.$scope.editThisUser = true;

  };

  UserDetailsCtrl.prototype.listAllUsers = function () {

    // return all user details from the user document
    var returnedPromise = this.UsersMongoDB.all(null, function () {
    }, function (value) {

      this.$log('Failure: UserDetailsCtrl.listAllUsers()', value);

    }.bind(this));

    returnedPromise.then(function (value) {

      console.log(JSON.stringify(value));

      this.$scope.allUsers = value;

    }.bind(this));

  };

  UserDetailsCtrl.prototype.submitAddUserForm = function (isValid) {

    this.$scope.addUserSubmit.submitted = true;

    // check to make sure the form is completely valid
    if (isValid) {
      // submit details to mongodDB

      var returnedPromise = this.$scope.addUser.$save(function () {
      }, function (value) {

        this.$log('Failure: UserDetailsCtrl.submitAddUserForm', value);

      }.bind(this));

      returnedPromise.then(function (value) {

        console.log(value);

      }.bind(this));
    }

  };

  app.controller('UserDetailsCtrl', UserDetailsCtrl);

}());
