///**
// * Created by awalpole on 09/04/2014.
// */

'use strict';

angular.module('portfolioApp').factory('UsersMongoDB', function ($mongolabResourceHttp) {
  return $mongolabResourceHttp('user');
});
