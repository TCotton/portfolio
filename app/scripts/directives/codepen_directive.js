/**
 * Created by awalpole on 12/09/2014.
 */

'use strict';

angular.module('portfolioApp.directives').directive('codepenDirective', ['$timeout', '$document', function ($timeout, $document) {

  return {
    restrict: 'A',
    link: function () {

      $timeout(function () {
        var e = $document[0].createElement('script');
        e.type = 'text/javascript';
        e.src = '//codepen.io/assets/embed/ei.js';
        var script = $document[0].getElementsByTagName('script')[0];
        script.parentNode.insertBefore(e, script);
      }, 10000);

    }
  };

}]);
