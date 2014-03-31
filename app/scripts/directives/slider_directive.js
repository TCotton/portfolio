/**
 * Created by andywalpole on 30/03/2014.
 */
'use strict';

angular.module('portfolioApp').directive('sliderDirective', ['SLIDER', '$interval', '$timeout', '$animate', function (SLIDER, $interval, $timeout, $animate) {

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
                $scope.slider.sliderClass = 'slider' + sliderNumber;

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
    link: function (scope, element) {

      var sliderDirectiveLink = {

        sliderTotal: _.size(SLIDER),
        timeGap: 8000,
        startGap: 2000,
        animationGap: 7000,
        timerInterval: null,

        timer: function () {

          // add and remove animate classes
          var pTag = angular.element(element[0].querySelector('p'));
          var h2Tag = angular.element(element[0].querySelector('h2'));
          var aTag = angular.element(element[0].querySelector('a'));

          sliderDirectiveLink.timerInterval = $interval(function () {

            $animate.addClass(pTag, 'animate-bounceIn', function () {
              $timeout(function () {
                $animate.removeClass(pTag, 'animate-bounceIn');
              }, sliderDirectiveLink.animationGap);
            });

            $animate.addClass(h2Tag, 'animate-bounceIn', function () {
              $timeout(function () {
                $animate.removeClass(h2Tag, 'animate-bounceIn');
              }, sliderDirectiveLink.animationGap);
            });

            $animate.addClass(aTag, 'animate-bounceIn', function () {
              $timeout(function () {
                $animate.removeClass(aTag, 'animate-bounceIn');
              }, sliderDirectiveLink.animationGap);
            });

            // skip through the set interval and either reset the slider list to the beginning
            // or carry on to the next one
            if (scope.slideController.currentSlide < sliderDirectiveLink.sliderTotal) {

              scope.slideController.sliderForMethod(scope.slideController.currentSlide + 1);
              scope.slideController.currentSlide = scope.slideController.currentSlide + 1;

            } else {

              scope.slideController.sliderForMethod(sliderDirectiveLink.sliderTotal);
              scope.slideController.currentSlide = sliderDirectiveLink.sliderTotal;

            }
          }, this.timeGap);
        },

        navigation: function () {

          angular.element(element[0].querySelector('.right-arrow')).bind('click', function(){

            // use the left arrow to move through the slider in a left direction
            if (scope.slideController.currentSlide < sliderDirectiveLink.sliderTotal) {

              scope.slideController.sliderForMethod(scope.slideController.currentSlide + 1);
              scope.slideController.currentSlide = scope.slideController.currentSlide + 1;

            } else {

              scope.slideController.sliderForMethod(1);
              scope.slideController.currentSlide = 1;

            }

            $interval.cancel(sliderDirectiveLink.timerInterval);
            sliderDirectiveLink.timer();

          });

          angular.element(element[0].querySelector('.left-arrow')).bind('click', function(){

            // use the the right arrow to move through the slider in a right direction
            if (scope.slideController.currentSlide > 1) {

              scope.slideController.sliderForMethod(scope.slideController.currentSlide - 1);
              scope.slideController.currentSlide = scope.slideController.currentSlide - 1;

            } else {

              scope.slideController.sliderForMethod(sliderDirectiveLink.sliderTotal);
              scope.slideController.currentSlide = sliderDirectiveLink.sliderTotal;

            }

            $interval.cancel(sliderDirectiveLink.timerInterval);
            sliderDirectiveLink.timer();

          });

        },

        start: function () {

          // when the site first loads up the load the placeholder with the reduced PNG8 image
          $timeout(function () {

            scope.slideController.currentSlide = 1;
            scope.slideController.sliderStartMethod();

            $timeout(function () {

              // after the defined millisecond gap defined in startGap then load the right size iamge
              scope.slideController.sliderReplaceMethod();

            }, sliderDirectiveLink.startGap);

          }, 0);

        },

        destroy: function () {

          // destroy timers when scope is destroyed
          scope.$on('$destroy', function () {

            if (sliderDirectiveLink.timerInterval) {
              $interval.cancel(sliderDirectiveLink.timerInterval);
            }
            angular.element(element[0].querySelector('.left-arrow')).unbind('click');
            angular.element(element[0].querySelector('.right-arrow')).unbind('click');

          });
        },

        init: function () {
          sliderDirectiveLink.start();
          sliderDirectiveLink.timer();
          sliderDirectiveLink.navigation();
          sliderDirectiveLink.destroy();
        }
      };

      return sliderDirectiveLink.init();

    }
  };

}]);