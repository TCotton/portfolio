/**
 * Created by awalpole on 09/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp.blogAdminController');

  /**
   * @description Admin login form
   * @param $rootScope
   * @param $scope
   * @param $log
   * @param $location
   * @param MongoUserService
   * @param $angularCacheFactory
   * @constructor
   */
  var LoginCtrl = function ($rootScope, $scope, $log, $location, MongoUserService, $angularCacheFactory) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.$location = $location;
    this.$angularCacheFactory = $angularCacheFactory;

    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'MongoUserService', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: MongoUserService
    });

    /** Local scope
     * **/
    this.$scope.login = {};
    this.$scope.zipRegex = /(?!.*)/;
    this.$scope.submitted = false;

  };

  LoginCtrl.$inject = ['$rootScope', '$scope', '$log', '$location', 'MongoUserService', '$angularCacheFactory'];

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

        if(value.data !== 'null') {

          this.$angularCacheFactory.get('authCache').put('logginIn', value.data);
          this.$rootScope.userid = value.data;
          this.$location.path('/admin/');

        } else {

          this.$scope.messages.error = 'There seems to be an issue with your username or password';

        }

      }.bind(this), function (value) {

        this.$log.warn('Failure: LoginCtrl.submitLoginForm');
        this.$log.warn(value);

      }.bind(this));

    }

  };

  app.controller('LoginCtrl', LoginCtrl);

}());
