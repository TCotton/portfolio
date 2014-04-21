/**
 * Created by awalpole on 14/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var MongoUserService = function ($http, $q, CONFIG) {
    this.$http = $http;
    this.$q = $q;
    this.CONFIG = CONFIG;
  };

  MongoUserService.$inject = ['$http', '$q', 'CONFIG'];

  MongoUserService.prototype.addUser = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/users/add',
      method: 'POST',
      data: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  MongoUserService.prototype.getUsers = function() {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/users/get',
      method: 'GET'
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  MongoUserService.prototype.deleteUsers = function(formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/users/delete/' + formData,
      method: 'DELETE'
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  MongoUserService.prototype.editUsers = function(userData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/user/update',
      method: 'PUT',
      data: userData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  MongoUserService.prototype.findUsers = function(data) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/user/find',
      method: 'POST',
      data: data,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };


  app.service('MongoUserService', MongoUserService);

}());