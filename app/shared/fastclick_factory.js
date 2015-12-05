/**
 * Created by andywalpole on 26/10/15.
 */
'use strict';
angular.module('fastclick', []).factory('FastClick', ['$window', function($window) {
  return $window.FastClick;
}]);
