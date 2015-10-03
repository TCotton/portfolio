/**
 * Created by andywalpole on 02/10/15.
 */
'use strict';

var gfeed = require('google-feed-api');
var _ = require('underscore');
var q = require('q');
var Blog = require('../routes/models/blog_model');
var moment = require('moment');
var fs = require('fs');
var async = require('async');

class BlogCacheClass {
  get cache() {
    return this.value;
  }

  set cache(val) {
    this.value = val;
  }
}

var OldBlogPosts = new BlogCacheClass();
var OldBlogPostTotal = new BlogCacheClass();

var createJSONFile = function () {

  if (OldBlogPosts.cache) {

    fs.writeFile('./server/blogposts.json', OldBlogPosts.cache, function (err) {
      if (err) {
        throw new Error(err);
      }
    });

  }

};

createJSONFile();

let blogs = {
  totalArticles: '',
  BlogPosts: ''
};
let OldBlogFeed = {
  RSSFeed: '',
  BLOG: ''
};
let totalNewArticles;
let tasks;
let totalOldArticles;
let oldBlogPosts;
let oldBlogArticles;

function sortOldBlogPosts(data) {

  console.log('stage four');


  var posts = data;

  Object.keys(posts).forEach(function (key) {

    if (posts[key].publishedDate) {

      var newDate;

      if (posts[key].publishedDate.match(/[a-zA-Z]/g)) {
        newDate = moment(posts[key].publishedDate).valueOf();
      } else {
        newDate = posts[key].publishedDate;
      }

      // use moment().valueOf() so that the value is in milliseconds
      // the inbuilt angular filter date will format it to something easily understood
      posts[key].publishedDate = newDate.toString();

      // create a unique ID from the date which is used in the URL
      // when the individual blog post is loaded it is used to retrieve
      // the item from the article data array
      posts[key].uniqueId = newDate.toString().substring(0, 6);

    }

  });


  console.log(typeof posts);

  next(null, posts);

}

function seoFriendly(posts) {

  console.log('stage five');

  // in this array are a liist of stopwords which have less SEO value
  var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

  var oldPosts = posts;
  var regexNonAlphaNum = /[^\-a-z0-9]/g;
  var regexWhiteSpace = /\s/gi;
  var x;
  var l;
  var newTitle;

  Object.keys(oldPosts).forEach(function (key) {

    if (oldPosts[key].title) {

      // initially remove hyphens and the white space to their right
      newTitle = oldPosts[key].title.replace(/\–\s/g, '').toLowerCase();

      x = 0;
      l = stopwords.length;

      // loop through the SEO watch words and replace with white space hyphen
      do {

        var regEx = new RegExp('\\b\\s' + stopwords[x] + '\\s\\b', 'g');
        var regExTwo = new RegExp('^' + stopwords[x] + '\\s\\b');

        newTitle = newTitle.replace(regEx, '-').trim().replace(regExTwo, '');

        x += 1;

      } while (x < l);

      // remove white space and replace with hythen
      newTitle = newTitle.replace(regexWhiteSpace, '-');
      // remove all non-alpha numeric characters
      newTitle = newTitle.replace(regexNonAlphaNum, '');

      // now there is an SEO friendly URN fragment available for use
      oldPosts[key].url = newTitle;

    }

  });

  next(null, oldPosts);

}

function closeBlogComments(data) {

  console.log('stage six');

  totalOldArticles = _.size(data);
  oldBlogPosts = data;

  let oldPosts = oldBlogPosts;

  Object.keys(oldPosts).forEach(function (key) {
    oldPosts[key].commentsOpen = false;
  });

  next(null, oldPosts);

}

function newBlogPosts() {

  console.log('stage seven');

  // use mongoose to get all blogs in the database
  Blog.find((err, blogs) => {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) {
      throw new Error(err);
    }

    totalNewArticles = _.size(blogs);

    next(null, blogs);

  });

}


function addReviewImage(blogs) {

  console.log('stage eight');

  var oldPosts = blogs.BlogPosts;
  var numImages = _.size(OldBlogFeed.BLOG);
  var imageArray = _.toArray(OldBlogFeed.BLOG);

  var x = -1;

  Object.keys(oldPosts).forEach(function (key) {

    if (x === (numImages - 1)) {
      x = -1;
    }

    if (!oldPosts[key].displayImage) {
      oldPosts[key].displayImage = imageArray[(x += 1)];
    }

  });

  blogs.BlogPosts = oldPosts;

  next(null, blogs);

}

function mergeBlogPosts(blogs) {

  blogs.BlogPosts = _.union(blogs, oldBlogPosts);

  next(null, blogs);

}

function totalArticlesCount(blogs) {

  console.log('stage nine');

  blogs.totalArticles = totalOldArticles + totalNewArticles;

  // new pass in the promise the blog posts ready to send to the browser
  next(null, blogs);

}

function grabOldBlogPosts(url) {

  var deferred = q.defer();

  var feed = new gfeed.Feed(url);

  feed.setNumEntries(50);

  feed.load((data) => {

    /** After retrieving data using Google RSS API store it into the cache and count number of old blog posts
     * **/
    if (data.error || !data) {
      deferred.reject(new Error('Error fetching feeds'));
    }

    deferred.resolve(data.feed.entries);

  });

  return deferred.promise;

}

function next(err, result) {
  if (err) {
    throw err;
  }

  var currentTask = tasks.shift();

  if (currentTask) {
    currentTask(result);
  }
}


class RSSClass {

  blogItems(callback) {

    // retrieve the cache
    oldBlogPosts = JSON.parse(OldBlogPosts.cache);
    totalOldArticles = JSON.parse(OldBlogPostTotal.cache);

    tasks = [
      newBlogPosts,
      mergeBlogPosts,
      addReviewImage,
      totalArticlesCount
    ];

    next();
    callback(blogs);
  }

  parseFeed(url, callback) {

    console.log('stage two');

    grabOldBlogPosts(url).then(function (posts) {

      console.log('stage three');

      tasks = [
        sortOldBlogPosts(posts),
        seoFriendly,
        closeBlogComments,
        newBlogPosts,
        addReviewImage,
        totalArticlesCount
      ];

      next();

      console.log('stage ten');

      // set cache here
      // cache old RSS feed and data
      OldBlogPosts.cache = JSON.stringify(oldBlogPosts);
      OldBlogPostTotal.cache = JSON.stringify(totalOldArticles);

      console.dir(blogs);

      callback(blogs.BlogPosts);

    });
  }
}

module.exports = function (app) {

  app.get('/api/oldBlog/get', function (req, res) {

    let newRSSClass = new RSSClass();

    OldBlogFeed.RSSFeed = req.query.RSSFeed;
    OldBlogFeed.BLOG = JSON.parse(req.query.BLOG);

    fs.exists('./server/blogposts.json', function (exists) {

      if (!exists) {
        createJSONFile();
      }

    });

    // if oldBlogPosts are in the cache then don't use the parseFeed method
    // just retrieve them from the cache
    if (OldBlogPosts.cache && OldBlogPostTotal.cache) {

      newRSSClass.blogItems(function (data) {
        res.json(data);
      });

    } else {

      console.log('stage one');
      console.log(OldBlogFeed.RSSFeed);

      newRSSClass.parseFeed(OldBlogFeed.RSSFeed, function (data) {
        res.json(data);
      });

    }
  });

};