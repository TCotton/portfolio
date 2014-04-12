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

    // returns the Suburban Glory RSS feed from the rackspace cloud
    return this.$http.jsonp(this.CONFIG.JSONP_GOOGLE_API + encodeURIComponent(this.CONFIG.RSS_FEED_LINK),
      {
        'cache': true
      }
    ).success(function (data) {

        return data;
      });
  };

  app.service('FeedService', FeedService);

}());