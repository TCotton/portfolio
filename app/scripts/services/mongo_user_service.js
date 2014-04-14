/**
 * Created by awalpole on 14/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var MongoUserService = function ($http, $q) {
    this.$http = $http;
    this.$q = $q;
  };

  MongoUserService.$inject = ['$http', '$q'];

  MongoUserService.prototype.addUser = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: 'phppages/mongolab_adduser.php',
      method: 'POST',
      params: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  app.service('MongoUserService', MongoUserService);

}());