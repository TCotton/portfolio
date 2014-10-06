/**
 * Created by awalpole on 14/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp.contractService');

  var PostFormService = function ($http, $q) {

    this.$http = $http;
    this.$q = $q;

  };

  PostFormService.$inject = ['$http', '$q'];

  PostFormService.prototype.submitForm = function (formData) {

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/sendmail',
      method: 'POST',
      data: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  app.service('PostFormService', PostFormService);

}());
