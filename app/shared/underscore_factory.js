/**
 * Created by awalpole on 06/10/2014.
 */
'use strict';
angular.module('underscore', []).factory('_',['$window', function ($window) {
  return $window._;
}]);