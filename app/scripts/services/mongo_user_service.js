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
      url: this.CONFIG.CURRENT_DOMAIN + 'phppages/mongolab_adduser.php',
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