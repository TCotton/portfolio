/**
 * Created by awalpole on 09/04/2014.
 */

'use strict';
(function () {

  /** Add, edit or delete blog posts
   * */

  var app = angular.module('portfolioApp');

  var BlogDetailsCtrl = function ($rootScope, $scope, $log, BlogMongoDB) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.addBlogFormData = {};
    this.addBlogFormData = new BlogMongoDB();
    this.$scope.addBlogFormSubmit = false;

  };

  BlogDetailsCtrl.prototype.addBlog = function(isValid) {

    this.$scope.addBlogFormSubmit = true;

    if(isValid) {

    }

  };

  BlogDetailsCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogMongoDB'];

  app.controller('BlogDetailsCtrl', BlogDetailsCtrl);

}());
