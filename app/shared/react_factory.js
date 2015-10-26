/**
 * Created by andywalpole on 26/10/15.
 */
angular.module('react', []).factory('React', ['$window', function($window) {
  'use strict';
  return $window.React;
}]);

