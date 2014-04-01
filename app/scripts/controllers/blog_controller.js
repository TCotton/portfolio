/**
 * Created by awalpole on 01/04/2014.
 */
'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var BlogCtrl = function ($http, $q) {
    this.$http = $http;
    this.$q = $q;
  };

  BlogCtrl.$inject = ['$http', '$q'];

  app.controller('BlogCtrl', BlogCtrl);

}());
