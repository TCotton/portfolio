/**
 * Created by awalpole on 09/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var UsersMongoDB = function ($mongolabResourceHttp) {
    this.$mongolabResourceHttp = $mongolabResourceHttp;
  };

  UsersMongoDB.$inject = ['$mongolabResourceHttp'];

  UsersMongoDB.prototype.mongoDBcall = function () {

    return this.$mongolabResourceHttp('users');

  };

  app.service('UsersMongoDB', UsersMongoDB);

}());
