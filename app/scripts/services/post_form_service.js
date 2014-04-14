/**
 * Created by awalpole on 14/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var PostFormService = function ($http, $q) {

    this.$http = $http;
    this.$q = $q;

  };

  PostFormService.$inject = ['$http', '$q'];

  PostFormService.prototype.submitForm = function (formData) {

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: 'phppages/form_completion.php',
      method: 'GET',
      params: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  app.service('PostFormService', PostFormService);

}());
