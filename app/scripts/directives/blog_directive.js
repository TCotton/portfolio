/**
 * Created by andywalpole on 01/04/2014.
 */
/*jshint multistr: true */
'use strict';

angular.module('portfolioApp').directive('blogDirective', ['FeedService', function (FeedService) {

  return {

    restrict: 'A',

    controller: function ($scope) {


      /* TODO: Move this to blog controller */

      $scope.blog = {

        totalArticles: null,
        totalOldArticles: null,
        totalNewArticles: null,
        oldBlogPosts: null

      };

    },

    link: function (scope) {

      var sliderDirectiveLink = {

        totalArticlesCount: function () {

          // cache the total number of articles
          // used in pagination
          scope.totalArticles = scope.totalOldArticles + scope.totalNewArticles;

        },

        returnedData: function () {

          FeedService.returnedRSS()
            .then(function (response) {

              if (response.status === 200) {

                //if(!scope.blog.oldBlogPosts) {
                // only sort posts below if the old blog post cache is empty
                // avoids uncessary heavy code

                // cache the total number of items returned
                scope.blog.totalOldArticles = _.size(response.data.responseData.feed.entries);
                // then sort old blog posts by date after changing date to native JS format
                scope.blog.oldBlogPosts = sliderDirectiveLink.sortOldBlogPosts(response.data.responseData.feed.entries);
                scope.blog.oldBlogPosts = _.sortBy(scope.blog.oldBlogPosts, function (o) {
                  // sort articles by publication date

                  return !o.publishedDate;

                });

                // create a seo friendly title and add it to the object in the oldBlogPosts scope
                sliderDirectiveLink.SEOFFriendlyURL();

              } // end if(!scope.oldBlogPosts) {

              sliderDirectiveLink.totalArticlesCount();

              //}
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

          var oldPosts = scope.blog.oldBlogPosts;
          var regexNonAlphaNum = /[^\-a-z0-9]/g;
          var regexWhiteSpace = /\s/gi;
          var x;
          var l;
          var newTitle;

          for (var key in oldPosts) {

            if (oldPosts.hasOwnProperty(key)) {

              if (oldPosts[key].title) {

                newTitle = oldPosts[key].title.replace(/\–\s/g, '').toLowerCase();

                x = 0;
                l = stopwords.length;

                do {

                  var regEx = new RegExp('\\b\\s' + stopwords[x] + '\\s\\b', 'g');

                  newTitle = newTitle.replace(regEx, '-').trim();

                  x += 1;

                } while (x < l);

                // to avoid using third party library take a closer look at why the following is buggy
                newTitle = newTitle.replace(regexWhiteSpace, '-');
                newTitle = newTitle.replace(regexNonAlphaNum, '');

                oldPosts[key].url = newTitle;

              }
            }
          }

          scope.blog.oldBlogPosts = oldPosts;

        },

        init: function () {

          sliderDirectiveLink.returnedData();

        }
      };

      sliderDirectiveLink.init();
    }
  };

}]);


angular.module('portfolioApp').directive('blogBlockDirective', [function () {

  return {
    restrict: 'A',
    replace: true,
    scope: {
      blog: '='
    },
    template: '<article>' +
      '<header><img src="images/blog-stock-images/stock-photo-one.jpg" alt="" /></header>' +
      '<section>' +
      '<h3 class="blog-title" data-ng-bind-html="blog.title">Books that helped me become a professional web developer</h3>' +
      '<p class="date" data-ng-bind="blog.publishedDate">Tue 18th Jun 2013</p>' +
      '<p data-ng-bind-html="blog.contentSnippet">I\'ve been working full-time as a web developer since 2009, previously creating my first website with \
      Microsoft\'s Frontpage in 2002 (remember that?!). Apart from a taking a few modules on an Open \
      University course, I\'ve gained 99% of my skills autodidactically.</p> ' +
      '</section>' +
      '<footer>' +
      '<p class="read-more"><a data-ng-href="\'/#!/blog/article/\'{{blog.url}}" class="underline">Read more...</a></p>' +
      '</footer>' +
      '</article>',

    link: function () {

      //console.log(blogDirective);


    }

  };

}]);

