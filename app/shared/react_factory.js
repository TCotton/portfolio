/**
 * Created by andywalpole on 26/10/15.
 */
'use strict';
angular.module('react', []).factory('React', ['$window', function($window) {
  return $window.React;
}]);

