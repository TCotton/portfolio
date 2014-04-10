/**
 * Created by awalpole on 09/04/2014.
 */

'use strict';
(function () {

  /** Add, edit or delete blog posts
   * */

  var app = angular.module('portfolioApp');

  var BlogDetailsCtrl = function ($rootScope, $scope, $log, BlogMongoDB) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;
    this.$scope.addBlogFormData = {};
    this.$scope.addBlogFormData = new BlogMongoDB();
    this.$scope.addBlogFormSubmit = false;
    this.$scope.formSuccess = null;

    this.addDate = function () {
      return addDate();
    };

    this.addUniqueID = function () {
      return addUniqueID();
    };

    this.addSEOFriendlyURL = function () {
      return addSEOFriendlyURL();
    };

    this.createContentSnippet = function () {
      return createContentSnippet();
    };

    this.trimString = function () {
      return trimString();
    };


    var trimString = function() {

      // trim white space off the start and end of the string values after successful form submission
      for(var key in this.$scope.addBlogFormData) {

        if(key.isPrototypeOf(this.$scope.addBlogFormData) && _.isString(this.$scope.addBlogFormData[key])) {

          this.$scope.addBlogFormData[key] = this.$scope.addBlogFormData[key].toString();

        }
      }
    }.bind(this);


    var createContentSnippet = function () {

      // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
      var snippet, maxLength, trimmedString;

      snippet = this.$scope.addBlogFormData.content.toString();

      // maximum number of characters to extract
      maxLength = 130;

      //trim the string to the maximum length
      // make sure not include opening paragraph tag if any
      // hence, cut string at the third characters
      trimmedString = snippet.substr(3, maxLength);

      //re-trim if we are in the middle of a word
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ' ...';

      //strip and HTML tags
      this.$scope.addBlogFormData.contentSnippet = trimmedString.replace(/(<([^>]+)>)/ig,'').trim();

    }.bind(this);


    var addSEOFriendlyURL = function () {

      var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

      var regexNonAlphaNum = /[^\-a-z0-9]/g;
      var regexWhiteSpace = /\s/gi;
      var x;
      var l;
      var newTitle;

      // initially remove hypthens and the white space to their right
      newTitle = this.$scope.addBlogFormData.title.replace(/\–\s/g, '').toLowerCase();

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

      this.$scope.addBlogFormData.title = newTitle;

    }.bind(this);


    var addUniqueID = function () {

      // unique id is used in the URL
      this.$scope.addBlogFormData.id = this.$scope.addBlogFormData.publishedDate.substring(0, 6);

    }.bind(this);


    var addDate = function () {

      // date in milliseconds. angularjs date filter displays user friendly date format on blog page
      this.$scope.addBlogFormData.publishedDate = Date.parse(new Date()).toString();

    }.bind(this);

  };


  BlogDetailsCtrl.prototype.addBlog = function (isValid) {

    this.$scope.addBlogFormSubmit = true;
    //this.$scope.formSuccess = null;

    // check to make sure the form is completely valid
    if (isValid) {

      this.trimString();
      this.addDate();
      this.addUniqueID();
      this.addSEOFriendlyURL();
      this.createContentSnippet();

      // submit details to mongodDB
      var returnedPromise = this.$scope.addBlogFormData.$save(function () {
      }, function (value) {

        this.$log('Failure: BlogDetailsCtrl.addBlog', value);

      }.bind(this));

      returnedPromise.then(function () {

        this.$scope.formSuccess = 'You have successfully added a blog article';

        // reset scope to remove values from input fields
        // loop over form field models
        for (var key in this.$scope.addBlogFormData) {

          if (this.$scope.addBlogFormData.hasOwnProperty(key)) {

            this.$scope.addBlogFormData[key] = null;

          }
        }

        this.$scope.addBlogFormSubmit = false;
        window.scrollTo(0, 0);

      }.bind(this));
    }

  };

  BlogDetailsCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogMongoDB'];

  app.controller('BlogDetailsCtrl', BlogDetailsCtrl);

}());