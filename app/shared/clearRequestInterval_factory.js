/**
 * Created by andywalpole on 09/04/2015.
 */

'use strict';
angular.module('clearRequestInterval', []).factory('clearRequestInterval', ['$window', function ($window) {

  /**
   * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
   * @param {int|object} fn The callback function
   */
  $window.clearRequestInterval = function (handle) {
    $window.cancelAnimationFrame ? $window.cancelAnimationFrame(handle.value) :
      $window.webkitCancelAnimationFrame ? $window.webkitCancelAnimationFrame(handle.value) :
        $window.mozCancelRequestAnimationFrame ? $window.mozCancelRequestAnimationFrame(handle.value) :
          $window.msCancelRequestAnimationFrame ? $window.msCancelRequestAnimationFrame(handle.value) :
            clearInterval(handle);
  };

  return $window.clearRequestInterval;

}]);