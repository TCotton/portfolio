/**
 * Created by andywalpole on 26/10/15.
 */
angular.module('fastclick', []).factory('FastClick', ['$window', function($window) {
  'use strict';
  return $window.FastClick;
}]);
