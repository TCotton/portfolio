/**
 * Created by andywalpole on 01/04/2014.
 */

'use strict';
angular.module('portfolioApp').controller('BlogCtrl', ['FeedService', 'CONFIG', '$rootScope', '$scope', '$location', function (FeedService, CONFIG, $rootScope, $scope, $location) {

  $scope.totalArticles = null;
  $scope.totalOldArticles = null;
  $scope.totalNewArticles = null;
  $scope.oldBlogPosts = null;
  $scope.paginationPageSize = 5;
  $scope.paginationPageSizeLimit = -5;
  $scope.paginationStartFrom = null;
  $scope.paginationTotalPages = Math.ceil($scope.totalArticles / $scope.paginationPageSize);
  $scope.click = null;
  $scope.next = null;
  $scope.prev = null;

  $scope.pagination = {

    currentPage: function () {

      return $rootScope.currentPage.substr($rootScope.currentPage.length - 2, $rootScope.currentPage.length - 1);

    },

    startingPagination: function () {

      var patt = /^=\d{1}$/; // if end of string is an equal sign and one digit
      var pattTwo = /^\d{2}$/; // if end of string is two digits

      if ($scope.pagination.currentPage().charAt($scope.pagination.currentPage().length - 1) === '/') {

        $scope.paginationStartFrom = $scope.paginationPageSize;

        $scope.next = '/#!/blog/?page=2';

      }

      if (patt.test($scope.pagination.currentPage())) {

        $scope.paginationStartFrom = $scope.pagination.currentPage().charAt($scope.pagination.currentPage().length - 1) * $scope.paginationPageSize;

        $scope.prev = (($scope.paginationStartFrom / $scope.paginationPageSize) - 1) !== 0 ? '/#!/blog/?page=' + (($scope.paginationStartFrom / $scope.paginationPageSize) - 1) : '/#!/blog/';
        $scope.next = '/#!/blog/?page=' + (($scope.paginationStartFrom / $scope.paginationPageSize) + 1);

      }

      if (pattTwo.test($scope.pagination.currentPage())) {

        if ($scope.pagination.currentPage() < $scope.totalArticles) {

          $scope.paginationStartFrom = $scope.pagination.currentPage() * $scope.paginationPageSize;

        } else {

          $scope.paginationStartFrom = $scope.totalArticles - $scope.paginationPageSize;

        }

        if ($scope.paginationStartFrom > $scope.totalArticles) {


          //place redirect here

          // $scope.$digest(function () {
          $location.path('/blog/');
          // });

        }
      }
    }
  };

  var BlogCtrlFun = {

    totalArticlesCount: function () {

      // cache the total number of articles
      // used in pagination
      $scope.totalArticles = $scope.totalOldArticles + $scope.totalNewArticles;

    },

    returnedData: function () {

      FeedService.returnedRSS()
        .then(function (response) {

          if (response.status === 200) {

            // cache the total number of items returned
            $scope.totalOldArticles = _.size(response.data.responseData.feed.entries);
            // then sort old blog posts by date after changing date to native JS format
            $scope.oldBlogPosts = BlogCtrlFun.sortOldBlogPosts(response.data.responseData.feed.entries);
            $scope.oldBlogPosts = _.sortBy($scope.oldBlogPosts, function (o) {
              // sort articles by publication date

              return !o.publishedDate;

            });

            // old blog posts don't have a image attached that can be used in the index layout
            // the method below adds
            BlogCtrlFun.addReviewImage();

            // create a seo friendly title and add it to the object in the oldBlogPosts scope
            BlogCtrlFun.SEOFFriendlyURL();

          }// end if(!scope.blog.oldBlogPosts) {

          BlogCtrlFun.totalArticlesCount();

          $scope.pagination.startingPagination();

        });
    },

    sortOldBlogPosts: function (posts) {
      // change date format on old blog posts to a native Javascript friendly format

      for (var key in posts) {

        if (posts.hasOwnProperty(key)) {

          if (posts[key].publishedDate) {

            posts[key].publishedDate = new Date(posts[key].publishedDate);

          }
        }
      }

      return posts;
    },

    SEOFFriendlyURL: function () {

      // create SEO friendly URL from title and add it to the oldBlogPosts scope
      var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

      var oldPosts = $scope.oldBlogPosts;
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

      $scope.oldBlogPosts = oldPosts;
    },

    addReviewImage: function () {

      var oldPosts = $scope.oldBlogPosts;
      var numImages = _.size(CONFIG.BLOG);
      var imageArray = _.toArray(CONFIG.BLOG);
      var x = -1;

      for (var key in oldPosts) {

        if (oldPosts.hasOwnProperty(key)) {

          if (x === (numImages - 1)) {
            x = -1;
          }

          oldPosts[key].displayImage = imageArray[(x += 1)];

        }
      }
    },

    init: function () {

      BlogCtrlFun.returnedData();

    }
  };

  BlogCtrlFun.init();

}]);