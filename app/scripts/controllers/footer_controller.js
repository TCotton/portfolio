/**
 * Created by awalpole on 23/05/2014.
 */
/*jshint camelcase: false */
'use strict';
(function () {

  var app = angular.module('portfolioApp.controllers');

  var _createContentSnippet;

  var FooterCtrl = function ($rootScope, $scope, $log, NewsBlurService) {

    this.$rootScope = $rootScope;
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
    Object.defineProperty(this, 'NewsBlurService', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: NewsBlurService
    });

    _createContentSnippet = function (title) {

      // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
      var snippet, maxLength, trimmedString;

      //strip any HTML tags
      snippet = title.replace(/(<([^>]+)>)/ig, '').trim();

      // maximum number of characters to extract
      maxLength = 130;

      //trim the string to the maximum length
      trimmedString = snippet.substr(0, maxLength);

      //re-trim if we are in the middle of a word
      return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ' ...';

    }.bind(this);

    this.loadData();

  };

  FooterCtrl.$inject = ['$rootScope', '$scope', '$log', 'NewsBlurService'];

  FooterCtrl.prototype.loadData = function () {

    var returnedPromise = this.NewsBlurService.getBlogPosts();

    returnedPromise.then(function (value) {

      if(value.data !== 'null') {

        // make JSON file into usable object
        var returnedData = JSON.parse(JSON.stringify(value.data));

        for (var key in returnedData.stories) {

          this.$scope.recArticle.title = returnedData.stories[key].story_title;
          this.$scope.recArticle.date = returnedData.stories[key].story_timestamp;
          this.$scope.recArticle.author = returnedData.stories[key].story_authors;
          this.$scope.recArticle.content = _createContentSnippet(returnedData.stories[key].story_content);
          this.$scope.recArticle.link = returnedData.stories[key].story_permalink;

          console.log(returnedData.stories[key]);

          if(key >= 0) {
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