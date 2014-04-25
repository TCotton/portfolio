/**
 * Created by awalpole on 13/04/2014.
 */

'use strict';

angular.module('portfolioApp').directive('homepageStatsDirective', ['STATS', '$window', function (STATS, $window) {

  return {
    restrict: 'A',
    templateUrl: 'views/homepage_stats.html',

    link: function (scope) {

      /** Only display the data that fits the screen width
       * Less than 979px = display three blocks of data
       * More that 979px = display all the data
       * If matchMedia isn't supported (IE9) then fallback to display all the data
       * **/

      var handleMediaMatch = function (mql) {

        if (!mql.matches) {

          scope.stats = STATS;

        } else {

          scope.stats = _.toArray(STATS).slice(0, 3);

        }
      };

      if ($window.matchMedia) {

        var mql = $window.matchMedia('screen and (max-width: 979px)');
        mql.addListener(handleMediaMatch);
        handleMediaMatch(mql);

      } else {

        scope.stats = STATS;

      }
    }
  };

}]);
