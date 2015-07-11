/**
 * Created by awalpole on 06/10/2014.
 */

'use strict';
angular.module('portfolioApp.footerService').factory('NewsBlurFactory', ['$http', '$q', function($http, $q) {

  return {

    getBlogPosts: function() {

      // return promise
      var deferred = $q.defer();

      var returnedMessage = $http({
        url: '/api/newsblur/get',
        method: 'GET'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;

    }

  };

}]);

