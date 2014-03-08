'use strict';
/**
 * Url modules
 */
//get the module from creating an angular module
angular.module('HTML5ModeURLs', []).config(['$locationProvider', function ($location) {
  $location.html5Mode(true);
}]);

angular.module('HashBangURLs', []).config(['$locationProvider', function ($location) {
  $location.hashPrefix('!');
}]);