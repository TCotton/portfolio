/**
 * Created by andywalpole on 06/04/2015.
 */
'use strict';
angular.module('requestInterval', []).factory('requestInterval', ['$window', function ($window) {

  // handle multiple browsers for requestAnimationFrame()
  // requestAnimationFrame() shim by Paul Irish
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();


  /**
   * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
   * @param {function} fn The callback function
   * @param {int} delay The delay in milliseconds
   */
  $window.requestInterval = function (fn, delay) {
    if (!$window.requestAnimationFrame &&
      !$window.webkitRequestAnimationFrame &&
      !($window.mozRequestAnimationFrame && $window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
      !$window.oRequestAnimationFrame &&
      !$window.msRequestAnimationFrame) {
      return $window.setInterval(fn, delay);
    }

    var start = new Date().getTime(),
      handle = {};

    function loop() {
      var current = new Date().getTime(),
        delta = current - start;

      if (delta >= delay) {
        fn.call();
        start = new Date().getTime();
      }

      handle.value = requestAnimFrame(loop);
    }

    handle.value = requestAnimFrame(loop);
    return handle;
  };

  return $window.requestInterval;

}]);