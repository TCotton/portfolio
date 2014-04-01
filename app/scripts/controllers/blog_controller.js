/**
 * Created by awalpole on 01/04/2014.
 */
'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var BlogCtrl = function ($http, $q, FeedService) {
    this.$http = $http;
    this.$q = $q;
    this.FeedService = FeedService;
  };

  BlogCtrl.$inject = ['$http', '$q', 'FeedService'];


  //this.FeedService.returnedRSS();

  BlogCtrl.prototype.testing = function() {
    console.log('here');
  };


  app.controller('BlogCtrl', BlogCtrl);

}());
