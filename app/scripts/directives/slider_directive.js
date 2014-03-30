/**
 * Created by andywalpole on 30/03/2014.
 */
'use strict';

angular.module('portfolioApp').directive('sliderDirective', ['SLIDER', '$interval', function (SLIDER, $interval) {

  return {
    restrict: 'A',
    scope: {
      slideClass: '@'
    },
    link: function (scope) {

      var timeGap = 1000;
      var recentNumber;
      var sliderForFunction;
      var currentSlide = 1;
      var sliderTotal = _.size(SLIDER);

      sliderForFunction = function (sliderNumber) {

        for (var key in SLIDER) {

          if (SLIDER.hasOwnProperty(key)) {

            if (key.charAt(key.length - sliderNumber)) {

              recentNumber = key.charAt(key.length - sliderNumber);
              //currentSlide = SLIDER[key] _.pluck(stooges, 'name')
              console.log('slider' + sliderNumber);
              scope.slideClass = 'slider1';

            }
          }
        }
      };

      sliderForFunction(currentSlide);

      var timer = $interval(function () {

        if(currentSlide <= sliderTotal) {

          //sliderForFunction(currentSlide + 1);
          currentSlide = currentSlide + 1;

        } else {

          //sliderForFunction(1);
          currentSlide = 1;

        }

      }, timeGap);

      scope.$on('$destroy', function () {

        if (timer) {
          $interval.cancel(timer);
        }

      });


    }
  };


}]);