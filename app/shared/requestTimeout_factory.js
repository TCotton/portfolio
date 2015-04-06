/**
 * Created by andywalpole on 06/04/2015.
 */
'use strict';
angular.module('requestTimeout', []).factory('requestTimeout', ['$window', function ($window) {


  // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  var requestAnimFrame = (function () {
    return $window.requestAnimationFrame ||
      $window.webkitRequestAnimationFrame ||
      $window.msRequestAnimationFrame ||
      function (callback) {
        $window.setTimeout(callback, 1000 / 60);
      };
  })();

  /**
   * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
   * @param {function} fn The callback function
   * @param {int} delay The delay in milliseconds
   */

  $window.requestTimeout = function (fn, delay) {

    var start;
    var handle;

    if (!$window.requestAnimationFrame && !$window.webkitRequestAnimationFrame &&
      !$window.oRequestAnimationFrame && !$window.msRequestAnimationFrame) {
      return $window.setTimeout(fn, delay);
    }

    start = new Date().getTime();
    handle = {};

    function loop() {
      var current = new Date().getTime(),
        delta = current - start;

      delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
    }

    handle.value = requestAnimFrame(loop);
    return handle;
  };

  return $window.requestTimeout;


}]);
