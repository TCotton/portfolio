'use strict';
(function() {
  class WorkPageCtrl {

    /**
     * @description Personal projects page
     * @param $rootScope {object}
     * @param $scope {object}
     * @param $log {object}
     * @param WORK {object}
     * @param $window {object}
     * @param _ {function}
     * @constructor
     */
    constructor($rootScope, $scope, $log, WORK, $window, _) {

      this.$rootScope = $rootScope;
      this.$scope = $scope;
      this.$log = $log;
      this.$window = $window;
      this._ = _;

      /** Using defineProperty prevents injected constants being exposed to the template
       * **/
      Object.defineProperty(this, 'WORK', {
        value: WORK.pages
      });

      Object.defineProperty(this, 'WORK_PROJECTS', {
        value: WORK.postContent
      });

      this.$scope.title = null;
      this.$scope.summary = null;
      this.$scope.details = null;
      this.$scope.code = null;
      this.$scope.company = null;
      this.$scope.workImage = null;
      this.$scope.prevPage = null;
      this.$scope.nextPage = null;

    }

    findData() {

      let currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf('/') + 1, this.$rootScope.currentPage.length);

      let wordData = this._.filter(this.WORK, function(o) {

        if (o.internalUrl.substring(o.internalUrl.lastIndexOf('/') + 1, o.internalUrl.length) === currentPage) {

          return o;

        }
      });

      if (!this._.isEmpty(wordData)) {

        this.bindData(wordData);
        this.navigation();

      } else {

        this.$window.location.href = '/#!/404';

      }

    }

    /** Bind the data from the constans to the local scope
     * **/

    bindData(data) {

      this.$scope.title = data[0].title;
      this.$scope.summary = data[0].summary;
      this.$scope.details = data[0].details;
      this.$scope.code = data[0].code;
      this.$scope.company = data[0].company;
      this.$scope.workImage = data[0].workImage;
      this.$scope.workImageWebP = data[0].workImage + '.webp';
      this.$rootScope.pageTitle = data[0].title + ' - ' + data[0].summary;

    }

    /** Navigation that allows the user to go either forwards or backwards in the side projects section
     * **/

    navigation() {

      /**
       * TODO: refactor pagination
       * **/

      let currentPage;
      let page;
      let pageNumber;
      let prevPage;
      let nextPage;

      currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf('/') + 1, this.$rootScope.currentPage.length);

      // return the object for the current page
      page = this._.filter(this.WORK, function(o) {

        if (o.internalUrl.substring(o.internalUrl.lastIndexOf('/') + 1, o.length) === currentPage) {
          return o;
        }
      });

      if (!this._.isEmpty(page)) {

        pageNumber = page[0].id;

        // return the object for the previous page
        prevPage = this._.filter(this.WORK, function(o) {

          if (parseInt(o.id, 10) === (parseInt(pageNumber, 10) - 1)) {
            return o;
          }
        });

        // return the object for the next page
        nextPage = this._.filter(this.WORK, function(o) {

          if (parseInt(o.id, 10) === (parseInt(pageNumber, 10) + 1)) {
            return o;
          }
        });

        // if first page then the prev link goes to the end of the pages
        prevPage = !_.isEmpty(prevPage) ? prevPage : this._.filter(this.WORK, function(o, k) {

          if (k === 'drnewmans') {
            return o;
          }
        });

        // if last page then start loop all over again
        nextPage = !this._.isEmpty(nextPage) ? nextPage : this._.filter(this.WORK, function(o, k) {

          if (k === 'elevaate') {
            return o;
          }
        });

        if (!this._.isEmpty(prevPage) && !this._.isEmpty(nextPage)) {

          // create href attribute values
          this.$scope.prevPage = prevPage[0].internalUrl;
          this.$scope.nextPage = nextPage[0].internalUrl;

        }
      }

    }
  }

  WorkPageCtrl.$inject = ['$rootScope', '$scope', '$log', 'WORK', '$window', '_'];

  angular.module('portfolioApp.wordProjectsController').controller('WorkPageCtrl', ['$rootScope', '$scope', '$log', 'WORK', '$window', '_', function($rootScope, $scope, $log, WORK, $window, _) {
    return new WorkPageCtrl($rootScope, $scope, $log, WORK, $window, _);
  }]);

}());