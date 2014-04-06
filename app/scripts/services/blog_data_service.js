/**
 * Created by awalpole on 05/04/2014.
 */
'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var BlogDataService = function ($http, $q, CONFIG, $rootScope, localStorageService, FeedService, $timeout) {

    this.$http = $http;
    this.$q = $q;
    this.CONFIG = CONFIG;
    this.$rootScope = $rootScope;
    this.localStorageService = localStorageService;
    this.FeedService = FeedService;
    this.$timeout = $timeout;

    this.totalArticles = null;
    this.totalOldArticles = localStorageService.get('totalOldArticles') || this.totalOldArticles;
    this.totalNewArticles = null;
    this.oldBlogPosts = localStorageService.get('oldBlogPosts') || this.oldBlogPosts;
    /* the number of articles per page */
    this.paginationPageSize = 5;
    /* used in */
    this.paginationPageSizeLimit = -5;
    this.paginationStartFrom = null;
    this.paginationTotalPages = Math.ceil(this.totalArticles / this.paginationPageSize);

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


    var blogData = function (data) {

      var _this = this;

      // cache the total number of items returned
      _this.totalOldArticles = _.size(data);

      _this.localStorageService.add('totalOldArticles', _this.totalOldArticles);

      // then sort old blog posts by date after changing date to native JS format
      _this.oldBlogPosts = _this.sortOldBlogPosts(data);
      _this.oldBlogPosts = _.sortBy(_this.oldBlogPosts, function (o) {
        // sort articles by publication date
        return !o.publishedDate;
      });
      // old blog posts don't have a image attached that can be used in the index layout
      // the method below adds
      _this.addReviewImage();
      // create a seo friendly title and add it to the object in the oldBlogPosts scope
      _this.seoFriendly();

      _this.localStorageService.add('oldBlogPosts', _this.oldBlogPosts);

    }.bind(this);


    // change date format on old blog posts to a native Javascript friendly format
    var sortOldBlogPosts = function (posts) {

      for (var key in posts) {

        if (posts.hasOwnProperty(key)) {

          if (posts[key].publishedDate) {

            posts[key].publishedDate = new Date(posts[key].publishedDate);

          }
        }
      }

      return posts;

    };


    // cache the total number of articles
    // used in pagination
    var totalArticlesCount = function () {

      var _this = this;

      _this.totalArticles = _this.totalOldArticles + _this.totalNewArticles;

    }.bind(this);


    // create SEO friendly URL from title and add it to the oldBlogPosts scope
    var seoFriendly = function () {

      var _this = this;

      var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

      var oldPosts = _this.oldBlogPosts;
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

      _this.oldBlogPosts = oldPosts;

    }.bind(this);


    var addReviewImage = function () {

      var _this = this;

      var oldPosts = _this.oldBlogPosts;
      var numImages = _.size(_this.CONFIG.BLOG);
      var imageArray = _.toArray(_this.CONFIG.BLOG);
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

  BlogDataService.$inject = ['$http', '$q', 'CONFIG', '$rootScope', 'localStorageService', 'FeedService', '$timeout'];

  BlogDataService.prototype.retreiveData = function () {

    if (this.localStorageService.get('oldBlogPosts')) {
      //if blog articles are already stored as localstorage then don't call remote service and use values in storage
      this.FeedService.returnedRSS()
        .then(function (response) {

          var _this = this;

          if (response.status === 200) {

            _this.blogData(response.data.responseData.feed.entries);

          }
        }.bind(this));

    }

    return {
      data: this
    };

  };

  app.service('BlogDataService', BlogDataService);

}());
