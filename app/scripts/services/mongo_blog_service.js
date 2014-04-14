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
      url: 'phppages/mongolab_addblogpost.php',
      method: 'POST',
      data: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  app.service('MongoBlogService', MongoBlogService);

}());