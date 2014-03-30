/**
 * Created by andywalpole on 30/03/2014.
 */
'use strict';

angular.module('portfolioApp').directive('sliderDirective', ['SLIDER', '$interval', function (SLIDER, $interval) {

  return {
    restrict: 'A',
    scope: {
      slider: '@'
    },
    replace: true,
    template: '<div id="slider" class="{{slider.sliderClass}}">' +
      '<section>' +
      '<h2 class="page-top-title">{{slider.title}}</h2>' +
      '<p class="page-top-text">{{slider.test}}</p>' +
      '<a href="{{slider.link}}" class="button-front-one">View Project</a>' +
      '</section>' +
      '<div class="left-arrow"></div>' +
      '<div class="right-arrow"></div>' +
      '</div>', // change slider.test to slider.text and slider.link to slider.URL
    controller: function ($scope) {

      $scope.currentSlide = 0;

      console.log($scope);

      $scope.sliderForFunction = function (sliderNumber) {

        for (var key in SLIDER) {

          if (SLIDER.hasOwnProperty(key)) {

            if (key.indexOf(sliderNumber) !== -1) {

              $scope.slider = SLIDER[key];
              $scope.slider.sliderClass = 'slider' + sliderNumber;

            }
          }
        }
      };

    },
    link: function (scope) {

      var sliderTotal = _.size(SLIDER);
      var timeGap = 1000;

      var timer = $interval(function () {

        if (scope.currentSlide < sliderTotal) {

          scope.sliderForFunction(scope.currentSlide + 1);
          scope.currentSlide = scope.currentSlide + 1;

        } else {

          scope.sliderForFunction(1);
          scope.currentSlide = 1;

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