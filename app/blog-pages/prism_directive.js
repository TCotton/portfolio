/**
 * Created by awalpole on 10/09/2014.
 */
'use strict';
angular.module('portfolioApp.directives').directive('code', [function () {

  function escapeAngleBrackets(text) {
    return text.replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
  }

  function trimSurroundingEmptyLines(text) {
    return text.replace(/^(\n)*/, '').replace(/(\n)*(\s)*$/, '');
  }

  function fixIndention(text) {
    return text.replace(
      new RegExp('^ {' + text.search(/[^\s-]/) + '}', 'gm'), '');
  }

  return {
    restrict: 'E',
    terminal: true,
    link: function (scope, element) {

      var content = element.html();
      content = escapeAngleBrackets(content);
      content = trimSurroundingEmptyLines(content);
      content = fixIndention(content);
      element.html(content);
      Prism.highlightElement(element[0]);


    }
  };

}]);