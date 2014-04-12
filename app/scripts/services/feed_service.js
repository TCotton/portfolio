'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var FeedService = function ($http, $q, CONFIG) {
    this.$http = $http;
    this.$q = $q;
    this.CONFIG = CONFIG;
  };

  FeedService.$inject = ['$http', '$q', 'CONFIG'];

  FeedService.prototype.returnedRSS = function () {

    // return promise

    return this.$http.jsonp(this.CONFIG.JSONP_GOOGLE_API + encodeURIComponent(this.CONFIG.RSS_FEED_LINK),
      {
        'cache': false
      }
    );

  };

  app.service('FeedService', FeedService);

}());