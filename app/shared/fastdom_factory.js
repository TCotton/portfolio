/**
 * Created by andywalpole on 06/04/2015.
 */
'use strict';
angular.module('fastdom', []).factory('fastdom', ['$window', function($window) {
  return $window.fastdom;
}]);
