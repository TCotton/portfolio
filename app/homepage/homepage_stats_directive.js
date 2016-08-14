/**
 * Created by awalpole on 13/04/2014.
 */

'use strict';

angular.module('portfolioApp.homepageDirective').directive('homepageStatsDirective', ['STATS', '$window', '_', 'moment', '$templateCache', function(STATS, $window, _, moment, $templateCache) {

  return {
    restrict: 'A',
    template: $templateCache.get('homepage/homepage_stats.html'),
    scope: {
      header: '@header',
      section: '@section'
    },

    link: function(scope) {

      var mql;
      var handleMediaMatch;

      // work out the number of day I have been a full time web developer since April 1 2008
      // now milliseconds minus milliseconds from April 1, 2009 then calculate the days from this figure

      var start = moment('April 1, 2009').valueOf();
      var now = moment().valueOf();
      var totalDays = (now - start) / (1000 * 60 * 60 * 24);

      // now add the days to the scope
      var calculateDate = Math.round(totalDays).toString();

      /** Only display the data that fits the screen width
       * Less than 979px = display three blocks of data
       * More that 979px = display all the data
       * If matchMedia isn't supported (IE9) then fallback to display all the data
       * **/

      handleMediaMatch = function(mql) {

        if (!mql.matches) {

          scope.stats = STATS;
          scope.stats.block1.header = calculateDate;
          mql.removeListener(handleMediaMatch);

        } else {

          scope.stats = _.toArray(STATS).slice(0, 3);
          scope.stats[0].header = calculateDate;

        }

      };

      if ($window.matchMedia) {

        mql = $window.matchMedia('screen and (max-width: 979px)');
        mql.addListener(handleMediaMatch);
        handleMediaMatch(mql);

      } else {

        scope.stats = STATS;
        scope.stats.block1.header = calculateDate;

      }

      scope.$on('$destroy', function() {

        delete scope.stats;
        mql.removeListener(handleMediaMatch);

      });

    }
  };

}]);