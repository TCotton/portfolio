/**
 * Created by awalpole on 12/09/2014.
 */

'use strict';

angular.module('portfolioApp.blogPagesDirective').directive('codepenDirective', ['$timeout', '$document', function($timeout, $document) {

  return {
    restrict: 'A',
    link: function(scope) {

      var addCodePen = $timeout(function() {
        var e = $document[0].createElement('script');
        e.type = 'text/javascript';
        e.id = 'code-pen-script';
        e.src = '//codepen.io/assets/embed/ei.js';
        var script = $document[0].getElementsByTagName('script')[0];
        script.parentNode.insertBefore(e, script);
      }, 10000);

      scope.$on('$destroy', function() {

        if ($document[0].getElementById('code-pen-script')) {

          var script = $document[0].getElementById('code-pen-script');
          script.parentNode.removeChild(script);

        }

        if (addCodePen) {
          $timeout.cancel(addCodePen);
        }

      });

    }
  };

}]);
