/**
 * Created by awalpole on 23/04/2014.
 */

'use strict';
angular.module('portfolioApp').factory('oldBlogDataCache', function($cacheFactory) {
  return $cacheFactory('oldBlogData');
});

