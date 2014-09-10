/**
 * Created by awalpole on 10/09/2014.
 */
'use strict';
angular.module('portfolioApp.filters').filter('prism',  ['$sce', function ($sce) {

  return function (article) {
    console.log(typeof article);
    return $sce.trustAsHtml(article);
  };

}]);

//$sce
