/**
 * Created by awalpole on 05/05/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp.services');

  var MongoCommentService = function ($http, $q) {
    this.$http = $http;
    this.$q = $q;
  };

  MongoCommentService.$inject = ['$http', '$q'];

  MongoCommentService.prototype.addComment = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/comment/add',
      method: 'POST',
      data: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;
  };

  MongoCommentService.prototype.getComments = function () {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/comment/get',
      method: 'GET'
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };


  MongoCommentService.prototype.editComment = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    console.log(formData);

    var returnedMessage = this.$http({
      url: '/api/comment/update',
      method: 'PUT',
      data: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };


  MongoCommentService.prototype.deleteComment = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/comment/delete/' + formData,
      method: 'DELETE'
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  app.service('MongoCommentService', MongoCommentService);

}());
