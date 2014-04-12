/**
 * Created by awalpole on 09/04/2014.
 */

'use strict';
(function () {

  /** Add, edit or delete blog posts
   * */
  var app = angular.module('portfolioApp');

  /** Declare private method variables
   * **/
  var _trimString;
  var _createContentSnippet;
  var _addSEOFriendlyURL;
  var _removeNewLines;
  var _addUniqueID;
  var _addDate;

  var AddBlogCtrl = function ($rootScope, $scope, $log, BlogMongoDB) {

    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$log = $log;

    /** List scope here
     * **/
    this.$scope.addBlogFormData = {};
    this.$scope.addBlogFormData = new BlogMongoDB();
    this.$scope.blogContent = null;
    this.$scope.addBlogFormSubmit = false;
    this.$scope.formSuccess = null;

    /** Private methods
     ***/

    /** Remove any white space from the beginning and end of the inputed values
     * **/
    _trimString = function () {

      // trim white space off the start and end of the string values after successful form submission
      for (var key in this.$scope.addBlogFormData) {

        if (key.isPrototypeOf(this.$scope.addBlogFormData) && _.isString(this.$scope.addBlogFormData[key])) {

          this.$scope.addBlogFormData[key] = this.$scope.addBlogFormData[key].toString().trim();

        }
      }
    }.bind(this);

    /** Take the content and create a snippet to be used in the blog index
     * **/
    _createContentSnippet = function () {

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
      this.$scope.addBlogFormData.contentSnippet = trimmedString.replace(/(<([^>]+)>)/ig, '').trim();

    }.bind(this);

    /** Create a SEO-friendly URL from the blog post title
     * **/
    _addSEOFriendlyURL = function () {

      var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

      var regexNonAlphaNum = /[^\-a-z0-9]/g;
      var regexWhiteSpace = /\s/gi;
      var x;
      var l;
      var newTitle;

      // initially remove hyphens and the white space to their right
      newTitle = this.$scope.addBlogFormData.title.replace(/\–\s/g, '').toLowerCase();

      x = 0;
      l = stopwords.length;

      // loop through the SEO watch words and replace with white space hyphen
      do {

        var regEx = new RegExp('\\b\\s' + stopwords[x] + '\\s\\b', 'g');

        newTitle = newTitle.replace(regEx, '-').trim();

        x += 1;

      } while (x < l);

      // remove white space and replace with hyphens
      newTitle = newTitle.replace(regexWhiteSpace, '-');
      // remove all non-alpha numeric characters
      newTitle = newTitle.replace(regexNonAlphaNum, '');

      this.$scope.addBlogFormData.url = newTitle;

    }.bind(this);

    /** Remove any now lines from the content
     * **/
    _removeNewLines = function () {

      this.$scope.addBlogFormData.content = this.$scope.addBlogFormData.content.toString().replace(/[\s\r\n]+$/g, '');

    }.bind(this);

    _addUniqueID = function () {

      // unique id is used at the end of the blog page URL
      this.$scope.addBlogFormData.uniqueId = this.$scope.addBlogFormData.publishedDate.substring(0, 6);

    }.bind(this);

    /** date in milliseconds. angularjs date filter displays user friendly date format on blog page
     * **/
    _addDate = function () {

      this.$scope.addBlogFormData.publishedDate = parseInt(Date.parse(new Date()),10);

    }.bind(this);

  };

  AddBlogCtrl.prototype.addBlog = function (isValid) {

    this.$scope.addBlogFormSubmit = true;
    //this.$scope.formSuccess = null;

    // check to make sure the form is completely valid
    if (isValid) {

      _trimString();
      _removeNewLines();
      _addDate();
      _addUniqueID();
      _addSEOFriendlyURL();
      _createContentSnippet();

      // submit details to mongodDB
      var returnedPromise = this.$scope.addBlogFormData.$save(function () {
      }, function (value) {

        this.$log.warn('Failure: BlogDetailsCtrl.addBlog');
        this.$log.warn(value);

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

      }.bind(this), function (value) {

        this.$log.warn('Failure: AddBlogCtrl.addBlog');
        this.$log.warn(value);

      }.bind(this));
    }

  };

  AddBlogCtrl.$inject = ['$rootScope', '$scope', '$log', 'BlogMongoDB'];

  app.controller('AddBlogCtrl', AddBlogCtrl);

}());