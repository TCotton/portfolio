/**
 * Created by andywalpole on 08/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp.sideProjectsController');

  /**
   * @description Personal projects page
   * @param $rootScope
   * @param $scope
   * @param $log
   * @param PROJECTS
   * @param $window
   * @constructor
   */
  var ProjectsPageCtrl = function ($rootScope, $scope, $log, PROJECTS, $window) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.$window = $window;

    /** Using defineProperty prevents injected constants being exposed to the template
     * **/
    Object.defineProperty(this, 'PROJECTS', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: PROJECTS
    });

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

  ProjectsPageCtrl.$inject = ['$rootScope', '$scope', '$log', 'PROJECTS', '$window'];

  /** Take the right data for the project page from the constants based on the current page
   * **/
  ProjectsPageCtrl.prototype.findData = function () {

    var currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf('/') + 1, this.$rootScope.currentPage.length);

    var wordData = _.filter(this.PROJECTS, function (o) {

      if (o.internalUrl.substring(o.internalUrl.lastIndexOf('/') + 1, o.internalUrl.length) === currentPage) {

        return o;

      }
    });

    if (!_.isEmpty(wordData)) {

      this.bindData(wordData);
      this.navigation();

    } else {

      this.$window.location.href = '/#!/404';

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
    this.$rootScope.pageTitle = data[0].title + ' - ' + data[0].summary;

  };

  /** Navigation that allows the user to go either forwards or backwards in the side projects section
   * **/
  ProjectsPageCtrl.prototype.navigation = function () {

    /**
     * TODO: refactor pagination
     * **/

    var currentPage;
    var page;
    var pageNumber;
    var prevPage;
    var nextPage;

    currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf('/') + 1, this.$rootScope.currentPage.length);

    // return the object for the current page
    page = _.filter(this.PROJECTS, function (o) {

      if (o.internalUrl.substring(o.internalUrl.lastIndexOf('/') + 1, o.length) === currentPage) {

        return o;
      }
    });

    if (!_.isEmpty(page)) {

      pageNumber = page[0].id;

      // return the object for the previous page
      prevPage = _.filter(this.PROJECTS, function (o) {

        if (parseInt(o.id, 10) === (parseInt(pageNumber, 10) - 1)) {

          return o;
        }
      });

      // return the object for the next page
      nextPage = _.filter(this.PROJECTS, function (o) {

        if (parseInt(o.id, 10) === (parseInt(pageNumber, 10) + 1)) {

          return o;
        }
      });


      // if first page then the prev link goes to the end of the pages
      prevPage = !_.isEmpty(prevPage) ? prevPage : _.filter(this.PROJECTS, function (o, k) {

        if (k === 'twttwt') {
          return o;
        }
      });

      // if last page then start loop all over again
      nextPage = !_.isEmpty(nextPage) ? nextPage : _.filter(this.PROJECTS, function (o, k) {

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

  app.controller('ProjectsPageCtrl', ProjectsPageCtrl);

}());