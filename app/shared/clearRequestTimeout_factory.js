/**
 * Created by andywalpole on 06/04/2015.
 */

'use strict';
angular.module('clearRequestTimeout', []).factory('clearRequestTimeout',['$window', function ($window) {

  /**
   * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
   * @param {int|object} fn The callback function
   */
  $window.clearRequestTimeout = function (handle) {
    $window.cancelAnimationFrame ? $window.cancelAnimationFrame(handle.value) :
      $window.webkitCancelAnimationFrame ? $window.webkitCancelAnimationFrame(handle.value) :
            $window.oCancelRequestAnimationFrame ? $window.oCancelRequestAnimationFrame(handle.value) :
              $window.msCancelRequestAnimationFrame ? $window.msCancelRequestAnimationFrame(handle.value) :
                clearTimeout(handle);
  };

  return $window.clearRequestTimeout;

}]);
