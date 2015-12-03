/**
 * Created by awalpole on 23/05/2014.
 */

/*jshint camelcase: false */
/*jshint loopfunc: true */
'use strict';
class FooterCtrl {
  /**
   * constructor
   * @param $scope {object}
   * @param $log {object}
   * @param NewsBlurService {object}
   * @param hfs {object}
   */
  constructor($scope, $log, NewsBlurService, hfs) {
    this.$scope = $scope;
    this.$log = $log;
    this.$scope.recArticle = {};
    this.$scope.recArticle.title = null;
    this.$scope.recArticle.date = null;
    this.$scope.recArticle.author = null;
    this.$scope.recArticle.content = null;
    this.$scope.recArticle.link = null;
    this.NewsBlurService = NewsBlurService;
    this.hfs = hfs;
  }

  loadData() {

    const returnedPromise = this.NewsBlurService.getBlogPosts();

    returnedPromise.then((value) => {

      if (value.data !== 'null') {

        // make JSON file into usable object
        let returnedData = value.data;

        for (let key in returnedData.stories) {

          this.$scope.recArticle.title = returnedData.stories[key]['story_title'];
          this.$scope.recArticle.date = returnedData.stories[key]['short_parsed_date'].split(',')[0];
          this.$scope.recArticle.author = returnedData.stories[key]['story_authors'];
          this.$scope.recArticle.content = this.hfs.createContentSnippet(returnedData.stories[key]['story_content'], 260);
          this.$scope.recArticle.link = returnedData.stories[key]['story_permalink'];

          if (key >= 0) {
            // only need first story in json file
            break;
          }

        }

      }

    }, (value) => {

      this.$log.warn('Failure: FooterCtrl.getBlogPosts');
      this.$log.warn(value);

    });

  }
}

FooterCtrl.$inject = ['$scope', '$log', 'NewsBlurService', 'helperFunctionsService'];

angular.module('portfolioApp.footerController').controller('FooterCtrl', ['$scope', '$log', 'NewsBlurService', 'helperFunctionsService', function($scope, $log, NewsBlurFactory, helperFunctionsService) {
  return new FooterCtrl($scope, $log, NewsBlurFactory, helperFunctionsService);
}]);
