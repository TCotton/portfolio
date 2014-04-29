/**
 * Created by awalpole on 19/04/2014.
 */

'use strict';

var gfeed = require('google-feed-api');
var _ = require('underscore');
var q = require('q');

var _blogData;

var RSSClass = function () {

  this.blogs = {};

  this.blogs.totalArticles = null;
  this.blogs.totalNewArticles = null;
  this.blogs.totalOldArticles = null;
  this.blogs.newBlogPosts = null;
  this.blogs.oldBlogPosts = null;
  this.blogs.oldBlogComplete = null;
  this.blogs.newBlogComplete = null;
  this.blogs.finished = null;

  this.BLOG = {
    BLOG_1: 'images/blog-stock-images/stock-photo-one.jpg',
    BLOG_2: 'images/blog-stock-images/stock-photo-two.jpg',
    BLOG_3: 'images/blog-stock-images/stock-photo-three.jpg',
    BLOG_4: 'images/blog-stock-images/stock-photo-four.jpg',
    BLOG_5: 'images/blog-stock-images/stock-photo-five.jpg',
    BLOG_6: 'images/blog-stock-images/stock-photo-six.jpg',
    BLOG_7: 'images/blog-stock-images/stock-photo-seven.jpg',
    BLOG_8: 'images/blog-stock-images/stock-photo-eight.jpg',
    BLOG_9: 'images/blog-stock-images/stock-photo-nine.jpg',
    BLOG_10: 'images/blog-stock-images/stock-photo-ten.jpg'
  };

  _blogData = function (data) {

    if (data.error) {
      new throwError('Error fetching feeds');
    }

    this.blogs.totalOldArticles = _.size(data.feed.entries);
    this.blogs.oldBlogPosts = data.feed.entries;

  }.bind(this);

  /*runFunctions = function () {

    this.blogs.oldBlogPosts = this.sortOldBlogPosts(this.blogs.newBlogPosts);
    this.blogs.oldBlogPosts = this.addReviewImage(this.blogs.newBlogPosts);
    this.blogs.oldBlogPosts = this.seoFriendly(this.blogs.newBlogPosts);
    this.totalArticlesCount();

    //if(this.blogs.finished) {

    return this.blogs;

    //}

  }.bind(this);*/

};


RSSClass.prototype.sortOldBlogPosts = function () {

  var posts = this.blogs.oldBlogPosts;

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

  this.blogs.oldBlogPosts = posts;

  return true;

};

RSSClass.prototype.totalArticlesCount = function () {

  this.blogs.totalArticles = this.blogs.totalOldArticles + this.blogs.totalNewArticles;

  return true;

};

RSSClass.prototype.seoFriendly = function (data) {

  var data =  this.blogs.oldBlogPosts;

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

  this.blogs.oldBlogPosts = oldPosts;

  return true;

};

RSSClass.prototype.addReviewImage = function () {

  var data = this.blogs.oldBlogPosts;

  var oldPosts = data;
  var numImages = _.size(this.BLOG);
  var imageArray = _.toArray(this.BLOG);
  var x = -1;

  for (var key in oldPosts) {

    if (oldPosts.hasOwnProperty(key)) {

      if (x === (numImages - 1)) {
        x = -1;
      }

      oldPosts[key].displayImage = imageArray[(x += 1)];

    }
  }

  this.blogs.oldBlogPosts = oldPosts;

  return true;

};


RSSClass.prototype.parseFeed = function (url, callback) {

  if(url) {

    var feed = new gfeed.Feed(url);

    feed.setNumEntries(50);
    feed.load(_blogData);

    q.fcall(this.sortOldBlogPosts).then(function(){
      callback(this.posts);
    }.bind(this)).done();

    /**
     *  this.blogs.oldBlogPosts = this.sortOldBlogPosts(this.blogs.newBlogPosts);
     this.blogs.oldBlogPosts = this.addReviewImage(this.blogs.newBlogPosts);
     this.blogs.oldBlogPosts = this.seoFriendly(this.blogs.newBlogPosts);
     this.totalArticlesCount();

     * **/

   /* setTimeout(function(){
      callback(this.blogs.oldBlogPosts);
    }.bind(this),1000);*/

  }

};

module.exports = function (app) {


  app.get('/api/oldBlog/get', function (req, res) {

    var OldBlogFeed = new RSSClass();
    OldBlogFeed.parseFeed('http://2223d9145efd2b35ed36-6671f2c2aa691e80e8c08f3a239bdfd7.r67.cf3.rackcdn.com/rss.xml', function(data){

      console.log(data);

      res.json(data);

    });

  });

};