/**
 * Created by andywalpole on 06/04/2015.
 */
'use strict';
angular.module('requestTimeout', []).factory('requestTimeout', ['$window', function($window) {

  // handle multiple browsers for requestAnimationFrame()
  var requestAFrame = (function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
      function(callback) {
        return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
      };
  })();

  /**
   * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
   * @param {function} fn The callback function
   * @param {int} delay The delay in milliseconds
   */

  $window.requestTimeout = function(fn, delay) {

    var start;
    var handle;

    if (!$window.requestAnimationFrame && !$window.webkitRequestAnimationFrame && !$window.oRequestAnimationFrame && !$window.msRequestAnimationFrame) {
      return $window.setTimeout(fn, delay);
    }

    start = new Date().getTime();
    handle = {};

    function loop() {
      var current = new Date().getTime();
      var delta = current - start;

      delta >= delay ? fn.call() : handle.value = requestAFrame(loop);
    }

    handle.value = requestAFrame(loop);
    return handle;
  };

  return $window.requestTimeout;

}]);