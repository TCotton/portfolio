/**
 * Created by awalpole on 04/01/15.
 */

'use strict';

angular.module('portfolioApp.blogPagesDirective').directive('loaderDirective', [function() {

  return {
    restrict: 'AE',
    replace: true,
    template: '<div class="loader"></div>'
  };

}]);
