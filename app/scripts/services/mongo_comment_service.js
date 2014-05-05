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

  MongoCommentService.prototype.addBlogPost = function (formData) {

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

  app.service('MongoCommentService', MongoCommentService);

}());
