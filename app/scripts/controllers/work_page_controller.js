/**
 * Created by andywalpole on 08/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var WorkPageCtrl = function ($rootScope, $scope, $log, WORK) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.WORK = WORK;

    this.findData();

  };

  WorkPageCtrl.prototype.findData = function () {

    var currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf('/') + 1, this.$rootScope.currentPage.length);

    var wordData = _.filter(this.WORK, function (o) {

      if (o.internalUrl.substring(o.internalUrl.lastIndexOf('/') + 1, o.internalUrl.length) === currentPage) {

        return o;

      }
    });

    this.bindData(wordData);

  };

  WorkPageCtrl.prototype.bindData = function (data) {

    this.$scope.title = data[0].title;
    this.$scope.summary = data[0].summary;
    this.$scope.details = data[0].details;
    this.$scope.code = data[0].code;
    this.$scope.company = data[0].company;
    this.$scope.workImage = data[0].workImage;

    console.log(data[0]);

  };

  WorkPageCtrl.$inject = ['$rootScope', '$scope', '$log', 'WORK'];

  app.controller('WorkPageCtrl', WorkPageCtrl);

}());