/**
 * Created by andywalpole on 26/11/2015.
 */
'use strict';
angular.module('portfolioApp.blogPagesDirective').directive('scrollToTop', ['$timeout', '$document', function($timeout, $document) {

  /**
   *
   * @param element {object}
   * @param to {number}
   * @param duration {number}
   */
  var scrollTo = function scrollTo(element, to, duration) {
    if (duration <= 0) {
      return;
    }
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    $timeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) {
        return;
      }
      scrollTo(element, to, duration - 10);
    }, 10);

  };

  /**
   * @param event {object}
   */

  var scrollEvent = function scrollEvent(event) {
    scrollTo($document[0].body, 0, 600);
    event.preventDefault();
  };

  return {
    restrict: 'A',
    link: function(scope, element) {

      element['0'].addEventListener('click', scrollEvent, false);

      scope.$on('$destroy', function() {
        element['0'].removeEventListener('click', scrollEvent, false);
      });

    }
  };

}]);