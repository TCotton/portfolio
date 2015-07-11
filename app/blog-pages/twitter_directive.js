/**
 * Created by awalpole on 04/01/15.
 */

'use strict';

angular.module('portfolioApp.blogPagesDirective').directive('twitterDirective', ['$timeout', '$document', function($timeout, $document) {

  return {
    restrict: 'A',
    link: function(scope) {

      var addTwitterScript = $timeout(function() {
        var e = $document[0].createElement('script');
        e.type = 'text/javascript';
        e.id = 'twitter-script';
        e.src = '//platform.twitter.com/widgets.js';
        var script = $document[0].getElementsByTagName('script')[0];
        script.parentNode.insertBefore(e, script);
      }, 7000);

      scope.$on('$destroy', function() {

        if ($document[0].getElementById('twitter-script')) {

          var script = $document[0].getElementById('twitter-script');
          script.parentNode.removeChild(script);

        }

        if (addTwitterScript) {
          $timeout.cancel(addTwitterScript);
        }

      });

    }
  };

}]);

