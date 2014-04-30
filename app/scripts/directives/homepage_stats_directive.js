/**
 * Created by awalpole on 13/04/2014.
 */

'use strict';

angular.module('portfolioApp').directive('homepageStatsDirective', ['STATS', '$window', '$timeout', function (STATS, $window, $timeout) {

  return {
    restrict: 'A',
    templateUrl: 'views/homepage_stats.html',
    scope: {
      header: '@header',
      section: '@section'
    },

    link: function (scope, element) {

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

      $timeout(function () {

        // work out the number of day I have been a full time web developer since April 1 2008
        // now milliseconds minus milliseconds from April 1, 2008 then calculate the days from this figure
        var start = Date.parse('April 1, 2009');
        var now = Date.parse(new Date());
        var totalDays = Math.round((now - start) / (1000 * 60 * 60 * 24));

        // find the DOM element where the days are displayed
        var days = element[0].querySelector('span:first-child header');

        // now add the days to the DOM element
        days.innerText = totalDays;

      });
    }
  };

}]);
