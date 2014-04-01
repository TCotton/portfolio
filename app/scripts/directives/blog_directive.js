/**
 * Created by andywalpole on 01/04/2014.
 */
'use strict';

angular.module('portfolioApp').directive('blogDirective', ['FeedService', function (FeedService) {

  return {

    restrict: 'A',

    link: function () {

      var sliderDirectiveLink = {

        totalArticles: null,
        totalOldArticles: null,
        totalNewArticles: null,

        totalArticlesCount: function (){

          var _this = this;

          // cache the total number of articles
          // used in pagination
          _this.totalArticles = _this.totalOldArticles + _this.totalNewArticles;

        },

        returnedData: function() {

          FeedService.returnedRSS()
            .then(function (response) {

              if (response.status === 200) {

                //console.log(response.data.responseData.feed.entries);

                // cache the total number of items returned
                sliderDirectiveLink.totalOldArticles = _.size(response.data.responseData.feed.entries);
                console.log(JSON.stringify(response));

              }
            });

        },

        init: function() {

          sliderDirectiveLink.returnedData();

        }
      };

      sliderDirectiveLink.init();
    }
  };

}]);




