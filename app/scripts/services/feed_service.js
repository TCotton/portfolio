'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var _FeedService = {};

  var FeedService = function ($http, $q, CONFIG) {
    this.$http = $http;
    this.$q = $q;
    _FeedService.CONFIG = CONFIG;
  };

  FeedService.$inject = ['$http', '$q', 'CONFIG'];

  FeedService.prototype.returnedRSS = function () {

    // return promise

    return this.$http.jsonp(_FeedService.CONFIG.JSONP_GOOGLE_API + encodeURIComponent(_FeedService.CONFIG.RSS_FEED_LINK),
      {
        'cache': true
      }
    );

  };

  app.service('FeedService', FeedService);

}());