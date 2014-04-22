/**
 * Created by awalpole on 22/04/2014.
 */
// Set up the cache ‘myCache’
'use strict';
angular.module('portfolioApp').factory('authCache', function($cacheFactory) {
  return $cacheFactory('logginin');
});
