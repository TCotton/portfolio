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
    this.$scope.editUser = new UsersMongoDB();

    this.$scope.editUserSubmit = {};
    this.$scope.editUserSubmit.submitted = false;
    this.$scope.addUserSubmit = {};
    this.$scope.addUserSubmit.submitted = false;
    this.$scope.allUsers = null;
    this.$scope.editThisUser = null;

    this.listAllUsers();

  };

  UserDetailsCtrl.$inject = ['$rootScope', '$scope', '$log', 'UsersMongoDB'];

  UserDetailsCtrl.prototype.editUser = function (data) {

    this.$scope.editThisUser = true;
    this.$scope.editUser.name = data.name;
    this.$scope.editUser.password = data.password;

  };

  UserDetailsCtrl.prototype.submitEditUserForm = function (isValid) {

    console.log('submitted');

    this.$scope.editUserSubmit.submitted = true;

    if (isValid) {

      console.log('yes');

    }

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
