/**
 * Created by awalpole on 23/05/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp.footerService');

  var NewsBlurService = function ($http, $q) {

    this.$http = $http;
    this.$q = $q;

  };

  NewsBlurService.$inject = ['$http', '$q'];

  NewsBlurService.prototype.getBlogPosts = function () {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: '/api/newsblur/get',
      method: 'GET'
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  app.service('NewsBlurService', NewsBlurService);

}());