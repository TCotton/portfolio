/**
 * Created by andywalpole on 30/03/2014.
 */
'use strict';

angular.module('portfolioApp').directive('sliderDirective', ['SLIDER', '$interval', function (SLIDER, $interval) {

  return {
    restrict: 'A',
    scope: {
      imageUrl: '@'
    },
    link: function (scope, elem, attrs) {

      var timeGap = 1000;

      var timer = $interval(function () {

        console.log('run');

      }, timeGap);


      console.log(scope);
      console.log(elem);
      console.log(attrs);
      console.log(SLIDER.slider1);

      scope.imageUrl = 'slider1';

      scope.$on('$destroy', function () {

        if (timer) {
          $interval.cancel(timer);
        }

      });


    }
  };


}]);