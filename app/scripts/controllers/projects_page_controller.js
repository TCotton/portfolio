
/**
 * Created by andywalpole on 08/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');

  var _ProjectsPageCtrl = {};

  var ProjectsPageCtrl = function ($rootScope, $scope, $log, PROJECTS) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    _ProjectsPageCtrl.PROJECTS = PROJECTS;

    /** local scope
     * **/
    this.$scope.title = null;
    this.$scope.summary = null;
    this.$scope.details = null;
    this.$scope.code = null;
    this.$scope.workImage = null;
    this.$scope.prevPage = null;
    this.$scope.nextPage = null;

    this.findData();

  };

  /** Take the right data for the project page from the constants based on the current page
   * **/
  ProjectsPageCtrl.prototype.findData = function () {

    var currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf('/') + 1, this.$rootScope.currentPage.length);

    var wordData = _.filter(_ProjectsPageCtrl.PROJECTS, function (o) {

      if (o.internalUrl.substring(o.internalUrl.lastIndexOf('/') + 1, o.internalUrl.length) === currentPage) {

        return o;

      }
    });

    if (!_.isEmpty(wordData)) {

      this.bindData(wordData);
      this.navigation();

    }
  };

  /** Bind the data from the constans to the local scope
   * **/
  ProjectsPageCtrl.prototype.bindData = function (data) {

    this.$scope.title = data[0].title;
    this.$scope.summary = data[0].summary;
    this.$scope.details = data[0].details;
    this.$scope.code = data[0].code;
    this.$scope.workImage = data[0].workImage;

  };

  /** Navigation that allows the user to go either forwards or backwards in the side projects section
   * **/
  ProjectsPageCtrl.prototype.navigation = function () {

    /**
     * TODO: refactor pagination
     * **/

    var currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf('/') + 1, this.$rootScope.currentPage.length);

    // return the object for the current page
    var page = _.filter(_ProjectsPageCtrl.PROJECTS, function (o) {

      if (o.internalUrl.substring(o.internalUrl.lastIndexOf('/') + 1, o.length) === currentPage) {

        return o;
      }
    });

    if (!_.isEmpty(page)) {

      var pageNumber = page[0].id;

      // return the object for the previous page
      var prevPage = _.filter(_ProjectsPageCtrl.PROJECTS, function (o) {

        if (parseInt(o.id, 10) === (parseInt(pageNumber, 10) - 1)) {

          return o;
        }
      });

      // return the object for the next page
      var nextPage = _.filter(_ProjectsPageCtrl.PROJECTS, function (o) {

        if (parseInt(o.id, 10) === (parseInt(pageNumber, 10) + 1)) {

          return o;
        }
      });


      // if first page then the prev link goes to the end of the pages
      prevPage = !_.isEmpty(prevPage)? prevPage: _.filter(_ProjectsPageCtrl.PROJECTS, function (o,k) {

        if (k === 'twttwt') {
          return o;
        }
      });

      // if last page then start loop all over again
      nextPage = !_.isEmpty(nextPage)? nextPage: _.filter(_ProjectsPageCtrl.PROJECTS, function (o,k) {

        if (k === 'lightning') {
          return o;
        }
      });

      if (!_.isEmpty(prevPage) && !_.isEmpty(nextPage)) {

        // create href attribute values
        this.$scope.prevPage = prevPage[0].internalUrl;
        this.$scope.nextPage = nextPage[0].internalUrl;

      }
    }
  };

  ProjectsPageCtrl.$inject = ['$rootScope', '$scope', '$log', 'PROJECTS'];

  app.controller('ProjectsPageCtrl', ProjectsPageCtrl);

}());