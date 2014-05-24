/**
 * Created by awalpole on 23/05/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var FooterCtrl = function ($rootScope, $scope, $log, NewsBlurService) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'NewsBlurService', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: NewsBlurService
    });

    this.loadData();

  };

  FooterCtrl.$inject = ['$rootScope', '$scope', '$log', 'NewsBlurService'];

  FooterCtrl.prototype.loadData = function () {

    var returnedPromise = this.NewsBlurService.getBlogPosts();

    returnedPromise.then(function (value) {

      if(value.data !== 'null') {

        // make JSON file into usable object
        var returnedData = JSON.parse(JSON.stringify(value.data));

        for (var key in returnedData.stories) {

          // use object properties in footer template
          console.log(returnedData.stories[key]);

          if(key >= 0) {
            // only need first story in json file
            break;
          }

        }

      }

    }.bind(this), function (value) {

      this.$log.warn('Failure: UserDetailsCtrl.deleteUser');
      this.$log.warn(value);

    }.bind(this));



  };

  app.controller('FooterCtrl', FooterCtrl);

}());

