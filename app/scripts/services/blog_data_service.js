/**
 * Created by awalpole on 05/04/2014.
 */
'use strict';
(function () {

  var app = angular.module('portfolioApp');
  /** Declare enclosed scope function names
   * **/
  var _oldblogData;
  var _newblogData;
  var _sortOldBlogPosts;
  var _totalArticlesCount;
  var _cache;
  var _seoFriendly;
  var _addReviewImage;
  var BlogDataService = function ($http, $q, CONFIG, $rootScope, FeedService, $timeout, $interval, $log, MongoBlogService, $angularCacheFactory) {

    /** angularjs stuff
     * **/
    this.$http = $http;
    this.$q = $q;
    this.CONFIG = CONFIG;
    this.$rootScope = $rootScope;
    this.FeedService = FeedService;
    this.$timeout = $timeout;
    this.$interval = $interval;
    this.$log = $log;
    this.MongoBlogService = MongoBlogService;
    this.$angularCacheFactory = $angularCacheFactory;

    this.totalArticles = this.$angularCacheFactory.get('blogCache').get('totalArticles') || null;
    this.totalNewArticles = this.$angularCacheFactory.get('blogCache').get('totalNewArticles') || null;
    this.newBlogPosts = this.$angularCacheFactory.get('blogCache').get('newBlogPosts') || null;
    this.oldBlogPosts = this.$angularCacheFactory.get('blogCache').get('oldBlogPosts') || null;
    this.oldBlogComplete = this.$angularCacheFactory.get('blogCache').get('oldBlogComplete')? true : false;
    this.newBlogComplete = this.$angularCacheFactory.get('blogCache').get('newBlogComplete')? true : false;

    /** method used for the data taken from the old blog RSS feed
     * **/
    _oldblogData = function (data) {

      // cache the total number of items returned
      this.totalOldArticles = _.size(data);
      this.oldBlogPosts = data;
      this.oldBlogPosts = _sortOldBlogPosts(this.oldBlogPosts);
      this.oldBlogPosts = _addReviewImage(this.oldBlogPosts);
      this.oldBlogPosts = _addReviewImage(this.oldBlogPosts);
      this.oldBlogPosts = _seoFriendly(this.oldBlogPosts);
      _totalArticlesCount();
      this.oldBlogComplete = true;

    }.bind(this);

    /** method used for the data taken from the MongodDB NoSQL database
     * **/
    _newblogData = function (data) {

      // cache the total number of items returned
      this.totalNewArticles = _.size(data);
      this.newBlogPosts = data;
      this.newBlogPosts = _sortOldBlogPosts(this.newBlogPosts);
      this.newBlogPosts = _addReviewImage(this.newBlogPosts);
      this.newBlogPosts = _addReviewImage(this.newBlogPosts);
      this.newBlogPosts = _seoFriendly(this.newBlogPosts);
      _totalArticlesCount();
      this.newBlogComplete = true;

    }.bind(this);

    /** 1. Create the right date format
     *  2. Using the date create a unique ID for the blog post which is used in the URL
     * **/
    _sortOldBlogPosts = function (posts) {

      for (var key in posts) {

        if (posts.hasOwnProperty(key)) {

          if (posts[key].publishedDate) {

            var newDate;

            if (posts[key].publishedDate.match(/[a-zA-Z]/g)) {
              newDate = Date.parse(posts[key].publishedDate);
            } else {
              newDate = posts[key].publishedDate;
            }

            // use Date.parse so that the value is in millisends
            // the inbuilt angular filter date will format it to something easily understood
            posts[key].publishedDate = newDate.toString();

            // create a unique ID from the date which is used in the URL
            // when the individual blog post is loaded it is used to retrieve
            // the item from the article data array
            posts[key].uniqueId = newDate.toString().substring(0, 6);

          }
        }
      }

      return posts;

    }.bind(this);

    /** Count the total number of articles
     * **/
    _totalArticlesCount = function () {

      this.totalArticles = this.totalOldArticles + this.totalNewArticles;

    }.bind(this);

    /* cache the relevant data in either session or storage
     * **/
    _cache = function () {

      this.$angularCacheFactory.get('blogCache').put('totalNewArticles', this.totalNewArticles);
      this.$angularCacheFactory.get('blogCache').put('newBlogPosts', this.totalNewArticles);
      this.$angularCacheFactory.get('blogCache').put('newBlogComplete', 'true');
      this.$angularCacheFactory.get('blogCache').put('oldBlogPosts', this.oldBlogPosts);
      this.$angularCacheFactory.get('blogCache').put('oldBlogComplete', 'true');
      this.$angularCacheFactory.get('blogCache').put('totalOldArticles', this.totalOldArticles);
      this.$angularCacheFactory.get('blogCache').put('totalArticles', this.totalArticles);

    }.bind(this);

    /** create SEO friendly URL from title and add it to the scope
     * **/
    _seoFriendly = function (data) {

      // in this array are a liist of stopwords which have less SEO value
      var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

      var oldPosts = data;
      var regexNonAlphaNum = /[^\-a-z0-9]/g;
      var regexWhiteSpace = /\s/gi;
      var x;
      var l;
      var newTitle;

      for (var key in oldPosts) {

        if (oldPosts.hasOwnProperty(key)) {

          if (oldPosts[key].title) {

            // initially remove hyphens and the white space to their right
            newTitle = oldPosts[key].title.replace(/\–\s/g, '').toLowerCase();

            x = 0;
            l = stopwords.length;

            // loop through the SEO watch words and replace with white space hyphen
            do {

              var regEx = new RegExp('\\b\\s' + stopwords[x] + '\\s\\b', 'g');

              newTitle = newTitle.replace(regEx, '-').trim();

              x += 1;

            } while (x < l);

            // remove white space and replace with hythen
            newTitle = newTitle.replace(regexWhiteSpace, '-');
            // remove all non-alpha numeric characters
            newTitle = newTitle.replace(regexNonAlphaNum, '');

            // now there is an SEO friendly URN fragment available for use
            oldPosts[key].url = newTitle;

          }
        }
      }

      return oldPosts;

    }.bind(this);

    /**
     // these are the images that appear at the top of every blog post
     // at the time of writing there are ten different images
     // they are placed in order one after the other
     * **/
    _addReviewImage = function (data) {

      var oldPosts = data;
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

      return oldPosts;

    }.bind(this);
  };


  BlogDataService.$inject = ['$http', '$q', 'CONFIG', '$rootScope', 'FeedService', '$timeout', '$interval', '$log', 'MongoBlogService', '$angularCacheFactory'];

  BlogDataService.prototype.retreiveData = function () {

    var deferred = this.$q.defer();

    // remove the line below on a production site
    //localStorage.clear();
    //sessionStorage.clear();

    // use a a cache means that it is possible to bypass the above methods and just serve up the data
    if (!this.$angularCacheFactory.get('blogCache').get('oldBlogPosts') || !this.$angularCacheFactory.get('blogCache').get('newBlogPosts')) {

      //if blog articles are already stored as session storage then don't call remote service and use values in storage

      this.MongoBlogService.getBlogPosts().then(function (value) {

        if (_.isObject(value.data)) {

          _newblogData(value.data);

        }

        this.FeedService.returnedRSS()

          .then(function (response) {

            if (!_.isNull(response.data.responseData)) {

              _oldblogData(response.data.responseData.feed.entries);

            }

          }.bind(this), function () {}).then(function () {

            // flip on a timer after a two seconds anyway as an emergency backup
            var timer = this.$timeout(function () {
              this.oldBlogComplete = true;
              this.newBlogComplete = true;
              this.$timeout.cancel(timer);
            }.bind(this));

            // make sure all methods above for manipulating data have
            if (this.oldBlogComplete && this.newBlogComplete) {
              angular.extend(this.oldBlogPosts, this.newBlogPosts);
              _cache();
            }

          }.bind(this), function () {}).then(function () {

            deferred.resolve(this);

          }.bind(this));
      }.bind(this));
    }

    return deferred.promise;

  };

  app.service('BlogDataService', BlogDataService);

}());