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
      '<p class="page-top-text" >{{slider.text}}</p>' +
      '<a href="{{slider.URL}}" class="button-front-one">View Project</a>' +
      '</section>' +
      '<div class="left-arrow"></div>' +
      '<div class="right-arrow"></div>' +
      '</div>',

    controller: function ($scope) {

      $scope.slideController = {
        currentSlide: 0,

        sliderForMethod: function (sliderNumber) {
          // loops through SLIDER constant and finds the right child objects

          for (var key in SLIDER) {

            if (SLIDER.hasOwnProperty(key)) {

              if (key.indexOf(sliderNumber) !== -1) {

                $scope.slider = SLIDER[key];
                $scope.slider.sliderClass = 'slider' + sliderNumber + ' reveal-animation';

              }
            }
          }
        },

        sliderStartMethod: function () {

          // starts off with first slider details and reduced quality image
          // after initial page load the placeholder image is replaced by the full size image
          $scope.slider = SLIDER.slider1;

          if (!sessionStorage.getItem('homePageLoaded')) {

            $scope.slider.sliderClass = 'sliderPlaceholder';
            sessionStorage.setItem('homePageLoaded', 'true');

          } else {

            $scope.slider.sliderClass = 'slider1';

          }
        },

        sliderReplaceMethod: function () {

          $scope.slider.sliderClass = 'slider1';

        }
      };

    },
    link: function (scope) {

      var sliderDirectiveLink = {

        sliderTotal: _.size(SLIDER),
        timeGap: 4000,
        startGap: 2000,
        timerInterval: null,
        startInterval: null,
        placeholderInterval: null,

        timer: function () {

          this.timerInterval = $interval(function () {

//            $animate.addClass(element, 'reveal-animation', function() {
//              $timeout(function() {
//                $animate.removeClass(element, 'reveal-animation');
//              }, 1000);
//            });

            // skip through the set interval and either reset the slider list to the beginning
            // or carry on to the next one
            if (scope.slideController.currentSlide < this.sliderTotal) {

              scope.slideController.sliderForMethod(scope.slideController.currentSlide + 1);
              scope.slideController.currentSlide = scope.slideController.currentSlide + 1;

            } else {

              scope.slideController.sliderForMethod(1);
              scope.slideController.currentSlide = 1;

            }

          }.bind(this), this.timeGap);
        },

        start: function () {

          // when the site first loads up the load the placeholder with the reduced PNG8 image
          this.startInterval = $interval(function () {

            scope.slideController.currentSlide = 1;
            scope.slideController.sliderStartMethod();
            $interval.cancel(this.startInterval);

            this.placeholderInterval = $interval(function () {

              // after the defined millisecond gap defined in startGap then load the right size iamge
              scope.slideController.sliderReplaceMethod();
              $interval.cancel(this.placeholderInterval);

            }.bind(this), this.startGap);
          }.bind(this), 0);
        },

        destroy: function () {

          // destroy timers when scope is destroyed
          scope.$on('$destroy', function () {

            if (sliderDirectiveLink.timerInterval) {
              $interval.cancel(sliderDirectiveLink.timerInterval);
            }
            if (sliderDirectiveLink.startInterval) {
              $interval.cancel(sliderDirectiveLink.startInterval);
            }
            if (sliderDirectiveLink.placeholderInterval) {
              $interval.cancel(sliderDirectiveLink.placeholderInterval);
            }

          });
        },

        init: function () {
          sliderDirectiveLink.start();
          sliderDirectiveLink.timer();
          sliderDirectiveLink.destroy();
        }
      };

      return sliderDirectiveLink.init();

    }
  };

}]);