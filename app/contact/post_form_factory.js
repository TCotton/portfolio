/**
 * Created by awalpole on 06/10/2014.
 */
'use strict';
angular.module('portfolioApp.contractService').factory('PostFormFactory', ['$http', '$q', function($http, $q) {

  return {

    submitForm: function(formData) {

      var deferred = $q.defer();

      var returnedMessage = $http({
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

  };

}]);
