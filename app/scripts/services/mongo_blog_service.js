/**
 * Created by awalpole on 14/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var MongoBlogService = function ($http, $q) {
    this.$http = $http;
    this.$q = $q;
  };

  MongoBlogService.$inject = ['$http', '$q'];

  MongoBlogService.prototype.addBlogPost = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/blog/add',
      method: 'POST',
      data: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  MongoBlogService.prototype.getBlogPosts = function () {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/blog/get',
      method: 'GET'
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  MongoBlogService.prototype.editBlogPosts = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/blog/update',
      method: 'PUT',
      data: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };


  MongoBlogService.prototype.deleteBlogPost = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/blog/delete/' + formData,
      method: 'DELETE'
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  MongoBlogService.prototype.getOldBlogPosts = function (data) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/oldBlog/get',
      method: 'GET',
      params: data
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  app.service('MongoBlogService', MongoBlogService);

}());