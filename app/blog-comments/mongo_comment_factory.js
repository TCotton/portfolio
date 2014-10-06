/**
 * Created by awalpole on 06/10/2014.
 */

'use strict';
angular.module('portfolioApp.blogCommentsService').factory('MongoCommentFactory', ['$http', '$q', function ($http, $q) {

  return {

    addComment: function (formData) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/comment/add',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    getComments: function () {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/comment/get',
        method: 'GET'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    editComment: function (formData) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/comment/update',
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    getPubilshedComments: function (data) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/comment/getPublished',
        method: 'GET',
        params: data
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    deleteComment: function (formData) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/comment/delete/' + formData,
        method: 'DELETE'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    }

  };

}]);

