/**
 * Created by andywalpole on 01/04/2014.
 */

'use strict';

angular.module('portfolioApp.directives').directive('commentDirective', [function () {

  return {
    restrict: 'A',
    scope: {
      comment: '='
    },
    replace: true,
    template: '<div class="user-comments">' +
      '<header data-ng-if="comment.url">' +
      '<p><a data-ng-href="{{comment.url}}" rel="external" class="underline"><span data-ng-bind="comment.name" itemprop="creator"></span></a>' +
      '<br><span data-ng-bind="comment.publishedDate | date" itemprop="commentTime"></span></p>' +
      '</header> ' +
      '<header data-ng-if="!comment.url">' +
      '<p><span data-ng-bind="comment.name" itemprop="creator"></span><br><span data-ng-bind="comment.publishedDate | date" itemprop="commentTime"></span></p>' +
      '</header>' +
      '<section data-ng-bind="comment.message" itemprop="commentText"></section>' +
      '</div>',
    link: function () {

    }
  };

}]);
