/**
 * Created by awalpole on 09/04/2014.
 */

'use strict';
(function () {

  /** Add, edit or delete blog posts
   * */

  var app = angular.module('portfolioApp');

  var BlogDetailsCtrl = function ($rootScope, $scope, $log, UsersMongoDB) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.UsersMongoDB = UsersMongoDB;

  };

  BlogDetailsCtrl.$inject = ['$rootScope', '$scope', '$log', 'UsersMongoDB'];

  app.controller('BlogDetailsCtrl', BlogDetailsCtrl);

}());
