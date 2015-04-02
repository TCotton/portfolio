/**
 * Created by andywalpole on 01/04/2014.
 */
/*jshint multistr: true */
'use strict';

angular.module('portfolioApp.blogPagesDirective').directive('blogBlockDirective', [function () {

  return {
    restrict: 'A',
    replace: true,
    scope: {
      blog: '=',
      srcset: '=',
      srcsetWebp: '=',
      srcsetLargeWebp: '='
    },
  template: '<article>' +
      '<header><a data-ng-href="/#!/blog/{{::blog.uniqueId}}/{{::blog.url}}">' +
      '<picture>' +
      '<source type="image/webp" media="(max-width: 481px)" data-ng-srcset="{{::srcsetWebp}}">' +
      '<source type="image/jpeg" media="(max-width: 480px)" data-ng-srcset="{{::srcset}}">' +
      '<source type="image/webp" media="(min-width: 481px)" data-ng-srcset="{{::srcsetLargeWebp}}">' +
      '<img data-ng-src="/{{::blog.displayImage}}" alt=""  />' +
      '</picture>' +
      '</a></header>' +
      '<section>' +
      '<h3 class="blog-title">{{::blog.title}}</h3>' +
      '<p class="date" data-ng-bind="blog.publishedDate | date"></p>' +
      '<p>{{::blog.contentSnippet}}</p> ' +
      '</section>' +
      '<footer>' +
      '<p class="read-more"><a data-ng-href="/#!/blog/{{::blog.uniqueId}}/{{::blog.url}}" class="underline">Read more...</a></p>' +
      '</footer>' +
      '</article>'
  };

}]);
