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
      '<p class="page-top-text">{{slider.text}}</p>' +
      '<a href="{{slider.URL}}" class="button-front-one">View Project</a>' +
      '</section>' +
      '<div class="left-arrow"></div>' +
      '<div class="right-arrow"></div>' +
      '</div>',

    controller: function ($scope) {

      $scope.currentSlide = 0;

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

      var sliderDirectiveLink = {

        sliderTotal: _.size(SLIDER),
        timeGap: 1000,

        timer: function () {

          return $interval(function () {

            // how do you bind 'this' to $interval anonymous function?
            if (scope.currentSlide < sliderDirectiveLink.sliderTotal) {

              scope.sliderForFunction(scope.currentSlide + 1);
              scope.currentSlide = scope.currentSlide + 1;

            } else {

              scope.sliderForFunction(1);
              scope.currentSlide = 1;

            }

          }, this.timeGap);
        },

        destroy: function () {

          scope.$on('$destroy', function () {

            if (sliderDirectiveLink.timer) {
              $interval.cancel(sliderDirectiveLink.timer);
            }

          });
        },

        init: function() {
          sliderDirectiveLink.timer();
          sliderDirectiveLink.destroy();
        }
      };

      return sliderDirectiveLink.init();

    }
  };

}]);