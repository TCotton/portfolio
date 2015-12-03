'use strict';
class PostFormService {

  /**
   * constructor
   * @param $http {object}
   * @param $q {object}
   */
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  /**
   * @param formData {object}
   * @returns {*|deferred.promise|{then, always}}
   */
  submitForm(formData) {

    const deferred = this.$q.defer();

    let returnedMessage = this.$http({
      url: '/api/sendmail',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  }
}

angular.module('portfolioApp.contractService').service('PostFormService', ['$http', '$q', function($http, $q) {
  return new PostFormService($http, $q);
}]);
