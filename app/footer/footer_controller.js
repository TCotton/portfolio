/**
 * Created by awalpole on 23/05/2014.
 */
/*jshint camelcase: false */
/*jshint loopfunc: true */
'use strict';
(function () {

  var app = angular.module('portfolioApp.footerController');

  /**
   * @description For displaying recommended blog article using data from the NewsBlur API
   * @param $scope
   * @param $log
   * @param NewsBlurFactory
   * @constructor
   */
  var FooterCtrl = function ($scope, $log, NewsBlurFactory, hfs) {

    this.$scope = $scope;
    this.$log = $log;
    this.$scope.recArticle = {};
    this.$scope.recArticle.title = null;
    this.$scope.recArticle.date = null;
    this.$scope.recArticle.author = null;
    this.$scope.recArticle.content = null;
    this.$scope.recArticle.link = null;


    /** Using defineProperty prevents injected service being exposed to the template
     * **/
    Object.defineProperty(this, 'NewsBlurFactory', {
      value: NewsBlurFactory
    });

    Object.defineProperty(this, 'hfs', {
      value: hfs
    });

  };

  FooterCtrl.$inject = ['$scope', '$log', 'NewsBlurFactory', 'helperFunctionsService'];

  /** Return JSON data for latest articles saved in my Newsblur account
   *  Uses Newsblur API on NodeJS
   * **/
  FooterCtrl.prototype.loadData = function () {

    var returnedPromise = this.NewsBlurFactory.getBlogPosts();

    returnedPromise.then(function (value) {

      if (value.data !== 'null') {

        // make JSON file into usable object
        var returnedData = value.data;

        for (var key in returnedData.stories) {

          this.$scope.recArticle.title = returnedData.stories[key].story_title;
          this.$scope.recArticle.date = returnedData.stories[key].short_parsed_date.split(',')[0];
          this.$scope.recArticle.author = returnedData.stories[key].story_authors;
          this.$scope.recArticle.content = this.hfs.createContentSnippet(returnedData.stories[key].story_content, 260);
          this.$scope.recArticle.link = returnedData.stories[key].story_permalink;

          if (key >= 0) {
            // only need first story in json file
            break;
          }

        }

      }

    }.bind(this), function (value) {

      this.$log.warn('Failure: FooterCtrl.getBlogPosts');
      this.$log.warn(value);

    }.bind(this));

  };

  app.controller('FooterCtrl', FooterCtrl);

}());
