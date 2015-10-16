/**
 * Created by andywalpole on 16/10/15.
 */

'use strict';

angular.module('portfolioApp.blogPagesDirective').directive('vineDirective', ['$timeout', '$document', function($timeout, $document) {

  return {
    restrict: 'A',
    link: function(scope) {

      var addVineScript = $timeout(function() {
        var e = $document[0].createElement('script');
        e.type = 'text/javascript';
        e.id = 'vine-script';
        e.src = '//platform.vine.co/static/scripts/embed.js';
        var script = $document[0].getElementsByTagName('script')[0];
        script.parentNode.insertBefore(e, script);
      }, 8000);

      scope.$on('$destroy', function() {

        if ($document[0].getElementById('vine-script')) {

          var script = $document[0].getElementById('vine-script');
          script.parentNode.removeChild(script);

        }

        if (addVineScript) {
          $timeout.cancel(addVineScript);
        }

      });

    }
  };

}]);

