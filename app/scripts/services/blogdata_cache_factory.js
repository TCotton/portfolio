/**
 * Created by awalpole on 22/04/2014.
 */
'use strict';
angular.module('portfolioApp').factory('newBlogDataCache', function($cacheFactory) {
  return $cacheFactory('newBlogData');
});

