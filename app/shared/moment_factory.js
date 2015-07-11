/**
 * Created by awalpole on 06/10/2014.
 */
'use strict';

angular.module('momentLibrary', []).factory('moment', ['$window', function($window) {
  return $window.moment;
}]);
