'use strict';
/**
 * Created by andywalpole on 02/04/2015.
 */
angular.module('lodash', []).factory('_', ['$window', function($window) {
  return $window._;
}]);
