/**
 * Created by awalpole on 06/10/2014.
 */
'use strict';
angular.module('portfolioApp.blogAdminService').factory('MongoUserFactory', ['$http', '$q', function ($http, $q) {

  return {

    addUser: function (formData) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/users/add',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    getUsers: function () {
      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/users/get',
        method: 'GET'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    deleteUsers: function (formData) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/users/delete/' + formData,
        method: 'DELETE'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    editUsers: function (userData) {
      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/user/update',
        method: 'PUT',
        data: userData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    findUsers: function (data) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/user/find',
        method: 'POST',
        data: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    }

  };

}]);