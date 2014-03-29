/**
 * simple translation filter with localisation library
 * usage {{ TOKEN | i18n }}
 */
angular.module('portfolioApp').filter('i18n', ['localize', function (localize) {
  'use strict';
  return function (input) {
    return localize.getLocalizedString(input);
  };
}]);