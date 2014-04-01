'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var FeedService = function ($http, $q) {
    this.$http = $http;
    this.$q = $q;
  };

  var _grabFeed = function(url, data) {

    return $http({
      method: 'GET',
      url: 'http://www.suburban-glory.com/rss.xml',
      cache: false
    }).then(
      function(response) {
        // The then function here is an opportunity to modify the response
        // The return value gets picked up by the then in the controller.
        return response;
      },
      function(response) { // if is there any error, it will be controlled from the controller
        return response;
      });

  };

  FeedService.$inject = ['$http', '$q'];

  //http://www.suburban-glory.com/rss.xml

  FeedService.prototype.whatever = function() {

    console.log('here');

  };







  app.service('FeedService', FeedService);

}());