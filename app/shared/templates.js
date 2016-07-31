angular.module('appTemplates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/homepage/homepage_stats.html',
    "<span data-ng-repeat=\"statsBlock in stats track by $index\"><header class=\"front-page-bottom-header\" data-ng-bind-html=\"statsBlock.header\"></header><section class=\"front-page-bottom-text\" data-ng-bind-html=\"statsBlock.section\"></section></span>"
  );


  $templateCache.put('app/homepage/main.html',
    "<div data-slider-directive data-slider=\"slider\"></div><div id=\"homepage-stats\" class=\"clearfix\" data-homepage-stats-directive></div>"
  );

}]);
