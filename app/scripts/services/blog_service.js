'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var BlogService = function (BlogMongoDB) {
    this.BlogMongoDB = BlogMongoDB;
  };

  BlogService.$inject = ['BlogMongoDB'];

  BlogService.prototype.returnBlogData = function () {

    var result = this.BlogMongoDB.query().then(function (queryResult) {

      // The then function here is an opportunity to modify the response
      // The return value gets picked up by the then in the controller.

      return queryResult;

    });

    // Return the promise to the controller
    return result;
  };

  app.service('BlogService', BlogService);

}());
