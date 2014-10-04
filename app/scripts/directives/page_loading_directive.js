/**
 * Created by awalpole on 04/10/2014.
 */

'use strict';

angular.module('portfolioApp.directives').directive('pageLoadingDirective', ['$document', '$templateCache', '$rootScope', function ($document,$templateCache,$rootScope) {

  return {
    restrict: 'E',
    template: $templateCache.get('page_loading.html'),
    scope: true,
    replace: true,
    link: function (scope, element, attr) {

      console.dir(scope);
      console.dir(element);
      console.dir(attr);

      var animationBounce = (function () {

        var _private = {

          pfx: ['webkit', 'moz', 'MS', 'o', ''],

          elem: null,

          prefixedEvent: function (element, type, callback) {

            for (var p = 0; p < this.pfx.length; p++) {
              if (!this.pfx[p]) {
                type = type.toLowerCase();
              }
              element.addEventListener(this.pfx[p] + type, callback, false);
            }

          },

          animationListener: function () {
            //element.html('');
            element.remove();
          },

          run: function () {
            this.prefixedEvent(this.get(), 'AnimationEnd', this.animationListener);
          },

          get: function () {
            return this.elem;
          },

          set: function (val) {
            this.elem = val;
          }
        };

        return {
          init: function (args) {

            _private.set(args.val);
            _private.run();

          }
        };
      }());

      var handleMediaMatch = function (mql) {

        if (mql.matches) {

          if ($document[0].querySelector('.pace')) {

            console.log('here');

            animationBounce.init({val: element[0]});

          } else {

         /*  $document[0].body.insertAdjacentHTML('afterbegin', '<div class="pace"><div class="pace-progress"><div class="pace-progress-inner"></div>' +
             '</div><div class="pace-activity"></div></div>');*/

            animationBounce.init({val: $document[0].querySelector('.pace')});

          }

        }

      };



      $rootScope.$on('$locationChangeStart', function () {

        if (window.matchMedia) {

          var mql = window.matchMedia('screen and (min-width: 415px)');
          mql.addListener(handleMediaMatch);
          handleMediaMatch(mql);

        }

      });


      scope.$on('$destroy', function () {

        console.log(element);



     /*   if (!$document[0].querySelector('.pace')) {

          $document[0].body.insertAdjacentHTML('afterbegin', '<div class="pace"><div class="pace-progress"><div class="pace-progress-inner"></div>' +
            '</div><div class="pace-activity"></div></div>');

          animationBounce.init({val: $document[0].querySelector('.pace')});

        }
*/


      });

    }

  };

}]);

