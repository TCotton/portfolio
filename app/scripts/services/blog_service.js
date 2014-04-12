'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var BlogService = function (BlogMongoDB) {
    this.BlogMongoDB = BlogMongoDB;
  };

  BlogService.$inject = ['BlogMongoDB'];

  BlogService.prototype.returnBlogData = function () {




  };

  app.service('BlogService', BlogService);

}());
