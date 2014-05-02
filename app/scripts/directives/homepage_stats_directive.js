/**
 * Created by awalpole on 13/04/2014.
 */

'use strict';

angular.module('portfolioApp.directives').directive('homepageStatsDirective', ['STATS', '$window', function (STATS, $window) {

  return {
    restrict: 'A',
    templateUrl: 'views/homepage_stats.html',
    scope: {
      header: '@header',
      section: '@section'
    },

    link: function (scope) {

      var mql;
      var handleMediaMatch;

      // work out the number of day I have been a full time web developer since April 1 2008
      // now milliseconds minus milliseconds from April 1, 2009 then calculate the days from this figure
      var calculateDate = function() {

        var start = moment('April 1, 2009').valueOf();
        var now = moment().valueOf();
        var totalDays = (now - start) / (1000 * 60 * 60 * 24);

        // now add the days to the scope
        return Math.round(totalDays).toString();

      };

      /** Only display the data that fits the screen width
       * Less than 979px = display three blocks of data
       * More that 979px = display all the data
       * If matchMedia isn't supported (IE9) then fallback to display all the data
       * **/

      handleMediaMatch = function (mql) {

        if (!mql.matches) {

          scope.stats = STATS;

        } else {

          scope.stats = _.toArray(STATS).slice(0, 3);

        }
        scope.stats.block1.header = calculateDate();
      };

      if ($window.matchMedia) {

        mql = $window.matchMedia('screen and (max-width: 979px)');
        mql.addListener(handleMediaMatch);
        handleMediaMatch(mql);

      } else {

        scope.stats = STATS;
        scope.stats.block1.header = calculateDate();

      }

      scope.$on('$destroy', function () {

        scope.stats = null;
        mql.removeListener(handleMediaMatch);

      });

    }
  };

}]);
