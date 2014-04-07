/**
 * Created by awalpole on 05/04/2014.
 */
'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var BlogDataService = function ($http, $q, CONFIG, $rootScope, localStorageService, FeedService, $timeout, $interval, $log) {

    this.$http = $http;
    this.$q = $q;
    this.CONFIG = CONFIG;
    this.$rootScope = $rootScope;
    this.localStorageService = localStorageService;
    this.FeedService = FeedService;
    this.$timeout = $timeout;
    this.$interval = $interval;
    this.$log = $log;

    this.totalArticles = null;
    this.totalOldArticles = localStorageService.get('totalOldArticles') || null;
    this.totalNewArticles = null;
    this.oldBlogPosts = localStorageService.get('oldBlogPosts') || null;
    this.workComplete = localStorageService.get('workComplete')? true: false;

    this.blogData = function (data) {
      return blogData(data);
    };

    this.totalArticlesCount = function () {
      return totalArticlesCount();
    };

    this.seoFriendly = function () {
      return seoFriendly();
    };

    this.addReviewImage = function () {
      return addReviewImage();
    };

    this.sortOldBlogPosts = function (data) {
      return sortOldBlogPosts(data);
    };

    this.finishDataProcessing = function () {
      return finishDataProcessing();
    };

    var blogData = function (data) {

      // cache the total number of items returned
      this.totalOldArticles = _.size(data);
      this.sortOldBlogPosts(data);
      this.addReviewImage();
      this.seoFriendly();
      this.totalArticlesCount();
      this.finishDataProcessing();

    }.bind(this);

    // change date format on old blog posts to a native Javascript friendly format
    var sortOldBlogPosts = function (posts) {

      var regex = /\D/g;

      for (var key in posts) {

        if (posts.hasOwnProperty(key)) {

          if (posts[key].publishedDate) {

            var newDate = new Date(posts[key].publishedDate);

            posts[key].publishedDate = newDate.toString();
            // create a unique ID from the date which is used in the URL
            // when the individual blog post is loaded it is used to retrieve
            // the item from the article data array
            posts[key].uniqueId = newDate.toString().replace(regex,'').substring(0,6);

          }
        }
      }

      // then sort old blog posts by date after changing date to native JS format
      this.oldBlogPosts = _.sortBy(posts, function (o) {
        // sort articles by publication date
        return !o.publishedDate;
      });

    }.bind(this);

    // cache the total number of articles
    // used in pagination
    var totalArticlesCount = function () {

      this.totalArticles = this.totalOldArticles + this.totalNewArticles;

    }.bind(this);

    var finishDataProcessing = function (){

      this.workComplete = true;
      this.localStorageService.add('totalOldArticles', this.totalOldArticles);
      this.localStorageService.add('oldBlogPosts', this.oldBlogPosts);
      this.localStorageService.add('workComplete', 'true');

    }.bind(this);

    // create SEO friendly URL from title and add it to the oldBlogPosts scope
    var seoFriendly = function () {

      var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

      var oldPosts = this.oldBlogPosts;
      var regexNonAlphaNum = /[^\-a-z0-9]/g;
      var regexWhiteSpace = /\s/gi;
      var x;
      var l;
      var newTitle;

      for (var key in oldPosts) {

        if (oldPosts.hasOwnProperty(key)) {

          if (oldPosts[key].title) {

            // initially remove hypthens and the white space to their right
            newTitle = oldPosts[key].title.replace(/\–\s/g, '').toLowerCase();

            x = 0;
            l = stopwords.length;

            // loop through the SEO watch words and replace with white space hythen
            do {

              var regEx = new RegExp('\\b\\s' + stopwords[x] + '\\s\\b', 'g');

              newTitle = newTitle.replace(regEx, '-').trim();

              x += 1;

            } while (x < l);

            // remove white space and replace with hythen
            newTitle = newTitle.replace(regexWhiteSpace, '-');
            // remove all non-alpha numeric characters
            newTitle = newTitle.replace(regexNonAlphaNum, '');

            oldPosts[key].url = newTitle;

          }
        }
      }

      this.oldBlogPosts = oldPosts;

    }.bind(this);

    var addReviewImage = function () {

      var oldPosts = this.oldBlogPosts;
      var numImages = _.size(this.CONFIG.BLOG);
      var imageArray = _.toArray(this.CONFIG.BLOG);
      var x = -1;

      for (var key in oldPosts) {

        if (oldPosts.hasOwnProperty(key)) {

          if (x === (numImages - 1)) {
            x = -1;
          }

          oldPosts[key].displayImage = imageArray[(x += 1)];

        }
      }

    }.bind(this);

  };

  BlogDataService.$inject = ['$http', '$q', 'CONFIG', '$rootScope', 'localStorageService', 'FeedService', '$timeout', '$interval', '$log'];

  BlogDataService.prototype.retreiveData = function () {

    var getData = function() {
      var deferred = this.$q.defer();

      if(!this.workComplete) {
        var timer = this.$interval(function () {
          // is there a better way than using $interval?
          if (this.workComplete) {
            deferred.resolve(this);
            this.$interval.cancel(timer);
          }
        }.bind(this), 100);
      } else {
        deferred.resolve(this);
      }

      return deferred.promise;
    }.bind(this);

    this.localStorageService.clearAll();

    if (!this.localStorageService.get('oldBlogPosts')) {

      //if blog articles are already stored as localstorage then don't call remote service and use values in storage
      this.FeedService.returnedRSS()
        .then(function (response) {

          if (_.isObject(response.data.responseData.feed.entries)) {

            this.blogData(response.data.responseData.feed.entries);

          }
        }.bind(this), function(error){
          this.$log.log('Error BlogDataService', error);
        }.bind(this));

    }

    return getData();

  };

  app.service('BlogDataService', BlogDataService);

}());
