/**
 * Created by andywalpole on 01/04/2014.
 */
'use strict';

angular.module('portfolioApp').directive('blogDirective', ['FeedService', function (FeedService) {

  return {

    restrict: 'A',
    //templateUrl: 'views/blog.html',

    link: function (scope) {

      FeedService.returnedRSS()
      .then(function(data) {
        if (data.error) return;

          console.log(angular.element(data).html());

      });

    }
  }

}]);




