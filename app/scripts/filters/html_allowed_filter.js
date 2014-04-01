/**
 * Created by awalpole on 01/04/2014.
 */

'use strict';

angular.module('portfolioApp').filter('htmlAllowed', ['$sce', function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(val);
  };
}]);
