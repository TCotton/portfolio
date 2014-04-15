/**
 * Created by awalpole on 09/04/2014.
 */
'use strict';
(function () {

  /** Add, edit or delete user details
   * */

  var app = angular.module('portfolioApp');

  var UserDetailsCtrl = function ($rootScope, $scope, $log, UsersMongoDB, MongoUserService) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    this.UsersMongoDB = UsersMongoDB;
    this.MongoUserService = MongoUserService;
    //this.$scope.addUser = new UsersMongoDB();
    this.$scope.editUser = new UsersMongoDB();
    this.$scope.deleteU = new UsersMongoDB();

    this.$scope.addUser = {};


    this.$scope.editUserSubmit = {};
    this.$scope.editUserSubmit.submitted = false;
    this.$scope.addUserSubmit = {};
    this.$scope.addUserSubmit.submitted = false;
    this.$scope.allUsers = null;
    this.$scope.editThisUser = null;
    this.$scope.formSuccess = null;

    this.listAllUsers();

  };

  UserDetailsCtrl.$inject = ['$rootScope', '$scope', '$log', 'UsersMongoDB', 'MongoUserService'];

  UserDetailsCtrl.prototype.editUser = function (data) {

    // populate form field models with the data of the user about to be edited
    this.$scope.editThisUser = true;
    this.$scope.editUser.name = data.name;
    this.$scope.editUser.password = data.password;
    this.$scope.editUser._id = {};
    this.$scope.editUser._id.$oid = data._id.$oid;

  };

  UserDetailsCtrl.prototype.deleteUser = function (data) {

    var returnedPromise = this.MongoUserService.deleteUsers({id: data._id.$oid});

    returnedPromise.then(function () {

      this.$scope.formSuccess = 'You have successfully deleted the user';
      // repopulate list of users
      this.listAllUsers();

    }.bind(this), function (value) {

      this.$log.warn('Failure: UserDetailsCtrl.deleteUser');
      this.$log.warn(value);

    }.bind(this));

  };

  // update a un individuals user details

  UserDetailsCtrl.prototype.submitEditUserForm = function (isValid) {

    this.$scope.editUserSubmit.submitted = true;
    // reset formSuccess scope
    this.$scope.formSuccess = null;

    if (isValid) {

      var returnedPromise = this.$scope.editUser.$update(function () {
      }, function (value) {

        this.$log.warn('Failure: UserDetailsCtrl.submitEditUserForm');
        this.$log.warn(value);

      }.bind(this));

      returnedPromise.then(function () {

        this.$scope.formSuccess = 'You have successfully updated the user details';

        // reset scope and hide the form
        this.$scope.editThisUser = null;

        // repopulate list of users after successfully changing user details
        this.listAllUsers();

      }.bind(this));
    }
  };

  // list all users

  UserDetailsCtrl.prototype.listAllUsers = function () {

    var returnedPromise = this.MongoUserService.getUsers();

    returnedPromise.then(function (value) {

      this.$scope.allUsers = value.data;

    }.bind(this), function (value) {

      this.$log.warn('Failure: UserDetailsCtrl.listAllUsers()');
      this.$log.warn(value);

    }.bind(this));

  };

  // add a user

  UserDetailsCtrl.prototype.submitAddUserForm = function (isValid) {

    // reset formSuccess scope
    this.$scope.formSuccess = null;

    if (isValid) {

      var returnedData = this.MongoUserService.addUser(this.$scope.addUser);

      returnedData.then(function () {

        this.$scope.formSuccess = 'You have successfully added a new user';
        // reset scope to remove values from input fields
        this.$scope.addUser.name = null;
        this.$scope.addUser.password = null;

        this.$scope.addUserSubmit.submitted = false;

        // repopulate list of users
        this.listAllUsers();

      }.bind(this), function (value) {

        this.$log.warn('Failure: UserDetailsCtrl.submitAddUserForm');
        this.$log.warn(value);

      }.bind(this));

    }

  };

  app.controller('UserDetailsCtrl', UserDetailsCtrl);

}());
