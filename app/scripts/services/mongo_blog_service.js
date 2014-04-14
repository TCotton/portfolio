/**
 * Created by awalpole on 14/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var MongoBlogService = function ($http, $q, CONFIG) {
    this.$http = $http;
    this.$q = $q;
    this.CONFIG = CONFIG;
  };

  MongoBlogService.$inject = ['$http', '$q', 'CONFIG'];

  MongoBlogService.prototype.addBlogPost = function (formData) {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: this.CONFIG.CURRENT_DOMAIN + 'phppages/mongolab_addblogpost.php',
      method: 'POST',
      data: formData,
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  MongoBlogService.prototype.getBlogPosts = function () {

    // return promise

    var deferred = this.$q.defer();

    var returnedMessage = this.$http({
      url: this.CONFIG.CURRENT_DOMAIN + 'phppages/mongolab_getblogposts.php',
      method: 'GET',
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    deferred.resolve(returnedMessage);

    return deferred.promise;

  };

  app.service('MongoBlogService', MongoBlogService);

}());