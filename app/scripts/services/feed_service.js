'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var FeedService = function ($http, $q) {
    this.$http = $http;
    this.$q = $q;
  };

  FeedService.$inject = ['$http', '$q'];

  FeedService.prototype.grabFeed = function () {

    var _this = this;

    return _this.$http({
      method: 'GET',
      url: 'http://www.suburban-glory.com/rss.xml',
      cache: false
    }).
      success(function (data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
    }).
      error(function (data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

  };



  //http://www.suburban-glory.com/rss.xml

  FeedService.prototype.returnedRSS = function () {

    var _this = this;

    return _this.$http({
      method: 'GET',
      url: 'http://www.suburban-glory.com/rss.xml',
      cache: false
    }).then(function(allData) {

        return allData.data;

      });


  };


  app.service('FeedService', FeedService);

}());