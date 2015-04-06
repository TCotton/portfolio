/**
 * Created by andywalpole on 30/03/2014.
 */
'use strict';

angular.module('portfolioApp.homepageDirective').directive('sliderDirective', ['SLIDER', '$interval', '$timeout', '$animate', '$window', '_', 'fastdom', 'requestTimeout', function (SLIDER, $interval, $timeout, $animate, $window, _, fastdom, requestTimeout) {

  return {
    restrict: 'A',
    scope: {
      slider: '@'
    },
    replace: true,
    template: '<div id="slider" data-ng-class="slider.sliderClass" tabindex="0">' +
    '<section>' +
    '<h2 class="page-top-title" class="slider1" data-ng-bind="slider.title"></h2>' +
    '<p class="page-top-text" data-ng-bind="slider.text"></p>' +
    '<a data-ng-href="{{slider.URL}}" class="button-front-one">View Project</a>' +
    '</section>' +
    '<div class="left-arrow" rel="prev" role="button" tabindex="0" aria-label="Previous slide"></div>' +
    '<div class="right-arrow" rel="next" role="button"  tabindex="0" aria-label="Next slide"></div>' +
    '</div>',
    controller: function ($scope) {

      $scope.slideController = {
        currentSlide: 0,

        sliderForMethod: function (sliderNumber) {
          // loops through SLIDER constant and finds the right child objects

          Object.keys(SLIDER).forEach(function (key) {

            if (key.indexOf(sliderNumber) !== -1) {

              $scope.slider = SLIDER[key];
              $scope.slider.sliderClass = 'slider' + sliderNumber;

            }

          });

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
        startGap: 4000,
        animationGap: 2000,
        timerInterval: null,

        timer: function () {

          var pTag;
          var pTagFunction;
          var h2Tag;
          var h2TagFunction;
          var aTag;
          var aTagFunction;

          // add and remove animate classes
          // this is not used on mobile devices because of performance issues
          // using matchMedia below it is possible to prevent the classes from changing

          fastdom.read(function () {

            pTag = angular.element(element[0].querySelector('p'));
            h2Tag = angular.element(element[0].querySelector('h2'));
            aTag = angular.element(element[0].querySelector('a'));

          });


          sliderDirectiveLink.timerInterval = $interval(function () {

            if ($window.matchMedia && $window.matchMedia('(min-device-width: 768px) and (orientation: landscape)')) {

              pTagFunction = function pTagFunction() {

                $animate.addClass(pTag, 'animate-bounceIn');

                requestTimeout(function () {
                  $animate.removeClass(pTag, 'animate-bounceIn');
                  scope.$digest();
                }, sliderDirectiveLink.animationGap);

              };

              h2TagFunction = function h2TagFunction() {

                $animate.addClass(h2Tag, 'animate-bounceIn');

                requestTimeout(function () {
                  $animate.removeClass(h2Tag, 'animate-bounceIn');
                  scope.$digest();
                }, sliderDirectiveLink.animationGap);

              };

              aTagFunction = function aTagFunction() {

                $animate.addClass(aTag, 'animate-bounceIn-later');

                requestTimeout(function () {
                  $animate.removeClass(aTag, 'animate-bounceIn-later');
                  scope.$digest();
                }, sliderDirectiveLink.animationGap);

              };

              pTagFunction();
              h2TagFunction();
              aTagFunction();

            }// end matchMedia

            // skip through the set interval and either reset the slider list to the beginning
            // or carry on to the next one
            if (scope.slideController.currentSlide < sliderDirectiveLink.sliderTotal) {

              scope.slideController.sliderForMethod(scope.slideController.currentSlide + 1);
              scope.slideController.currentSlide = scope.slideController.currentSlide + 1;

            } else {

              scope.slideController.sliderForMethod(1);
              scope.slideController.currentSlide = 1;

            }
          }, this.timeGap);
        },

        navigation: function () {

          angular.element(element[0].querySelector('.right-arrow')).bind('click', function () {

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

          angular.element(element[0].querySelector('.left-arrow')).bind('click', function () {

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

              // after the defined millisecond gap defined in startGap then load the right size image
              scope.slideController.sliderReplaceMethod();

              // force images to download in the background
              // otherwise there is a noticeable lag in image download with every new slide
              var imgs = '<div style="display:none" aria-hidden="true">' +
                '<img src="/images/slider/blinkbox.png" alt="" />' +
                '<img src="/images/slider/lightning.png" alt="" />' +
                '<img src="/images/slider/uk-law-student.png" alt="" />' +
                '<img src="/images/slider/kaplan.png" alt="" />' +
                '<img src="/images/slider/drnewmans.png" alt="" />' +
                '<img src="/images/slider/penny-books.png" alt="" />' +
                '<img src="/images/slider/twt-twt.png" alt="" /></div>';

              element.append(imgs);

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

angular.module('portfolioApp').filter('slice', function () {
  return function (arr, start, end) {
    return arr.slice(start, end);
  };
});