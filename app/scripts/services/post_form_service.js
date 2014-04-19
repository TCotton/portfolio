/**
 * Created by awalpole on 14/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var PostFormService = function ($http, $q, CONFIG) {

    this.$http = $http;
    this.$q = $q;
    this.CONFIG = CONFIG;

  };

  PostFormService.$inject = ['$http', '$q', 'CONFIG'];

  PostFormService.prototype.submitForm = function (formData) {

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: this.CONFIG.CURRENT_DOMAIN + 'phppages/form_completion.php',
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
