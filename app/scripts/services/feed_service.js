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

    var _this = this;

    // returns the Suburban Glory RSS feed from the rackspace cloud
    return _this.$http.jsonp(_this.CONFIG.JSONP_GOOGLE_API + encodeURIComponent(_this.CONFIG.RSS_FEED_LINK),
      {
        'cache': false
      }
    ).success(function (data) {

        return data;
      });
  };

  app.service('FeedService', FeedService);

}());