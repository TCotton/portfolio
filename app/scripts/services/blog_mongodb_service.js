/**
 * Created by andywalpole on 10/04/2014.
 */

'use strict';

angular.module('portfolioApp').factory('BlogMongoDB', function ($mongolabResourceHttp) {
  return $mongolabResourceHttp('blog');
});
