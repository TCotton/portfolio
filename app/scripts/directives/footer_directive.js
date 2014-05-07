/**
 * Created by awalpole on 07/05/2014.
 */

'use strict';

angular.module('portfolioApp.directives').directive('footerDirective', ['$rootScope', function ($rootScope) {

  return {
    restrict: 'A',
    templateUrl: 'views/footer.html',
    link: function (scope) {

      console.log($rootScope.currentPage);
      console.log(scope);

    }
  };

}]);