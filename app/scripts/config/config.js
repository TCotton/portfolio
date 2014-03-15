'use strict';
/**
 * Url modules
 */
//get the module from creating an angular module
angular.module('HashBangURLs', []).config(['$locationProvider', function ($location) {
  $location.hashPrefix('!');
}]);