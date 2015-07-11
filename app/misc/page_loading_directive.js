/**
 * Created by awalpole on 04/10/2014.
 */

'use strict';

angular.module('portfolioApp.miscDirective').directive('pageLoadingDirective', [function() {

  return {
    restrict: 'E',
    template: '<div class="pace"><div class="pace-progress"><div class="pace-progress-inner"></div></div><div class="pace-activity"></div></div>',
    replace: true,
    scope: true,
    link: function(scope, element) {

      var animationBounce = (function() {

        var _private = {

          pfx: ['webkit', 'moz', 'MS', 'o', ''],

          elem: null,

          prefixedEvent: function(element, type, callback) {

            for (var p = 0; p < this.pfx.length; p++) {
              if (!this.pfx[p]) {
                type = type.toLowerCase();
              }
              element.addEventListener(this.pfx[p] + type, callback, false);
            }

          },

          animationListener: function() {
            element.addClass('hide');
            element[0].style.webkitAnimationName = '';
          },

          run: function() {
            this.prefixedEvent(this.get(), 'AnimationEnd', this.animationListener);
          },

          get: function() {
            return this.elem;
          },

          set: function(val) {
            this.elem = val;
          }
        };

        return {
          init: function(args) {

            _private.set(args.val);
            _private.run();

          },
          destroy: function() {

            scope.$on('$destroy', function() {

              console.log('destroy');

              element.removeClass('hide');
              element[0].style.webkitAnimationName = 'pace-bounce-scaledown';

            });

          }
        };
      }());

      var handleMediaMatch = function(mql) {

        if (mql.matches) {

          animationBounce.init({val: element[0]});

        }

      };

      if (window.matchMedia) {

        var mql = window.matchMedia('screen and (min-width: 415px)');
        mql.addListener(handleMediaMatch);
        handleMediaMatch(mql);

      }

      animationBounce.destroy();

      scope.$on(
        '$destroy',
        function(event) {

          console.log(event);

        }
      );

    }

  };

}]);

