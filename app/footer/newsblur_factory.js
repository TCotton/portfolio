/**
 * Created by awalpole on 06/10/2014.
 */

'use strict';

class NewsBlurFactory {

  /**
   * constructor
   * @param $http {object}
   * @param $q {object}
   */

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getBlogPosts() {
    // return promise
    const deferred = this.$q.defer();

    let returnedMessage = this.$http({
      url: '/api/newsblur/get',
      method: 'GET'
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  }
}

angular.module('portfolioApp.footerService').service('NewsBlurFactory', ['$http', '$q', function($http, $q) {
  return new NewsBlurFactory($http, $q);
}]);

