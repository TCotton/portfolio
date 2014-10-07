/**
 * Created by awalpole on 06/10/2014.
 */
'use strict';
angular.module('portfolioApp.blogAdminService').factory('MongoBlogFactory', ['$http', '$q', function ($http, $q) {

  return {

    addBlogPost: function (formData) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/blog/add',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    getBlogPosts: function () {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/blog/get',
        method: 'GET'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    editBlogPosts: function (formData) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/blog/update',
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    deleteBlogPost: function (formData) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/blog/delete/' + formData,
        method: 'DELETE'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    },

    getOldBlogPosts: function (data) {

      // return promise

      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/oldBlog/get',
        method: 'GET',
        params: data
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    }

  };

}]);

