/**
 * Created by awalpole on 09/04/2014.
 * TODO: move blog processing methods to backend server along with parallel methods in AddBlogCtrl
 * TODO: refactor regex for _addSEOFriendlyURL
 */

'use strict';
(function () {

  /** Add, edit or delete blog posts
   * */

  var app = angular.module('portfolioApp.blogAdminController');
  /** Declare private method variable names
   * **/

  /**
   * @description for editing or deleting blog articles
   * @param $scope
   * @param $log
   * @param MongoBlogFactory
   * @param _
   * @param hfs
   * @constructor
   */
  var EditBlogCtrl = function ($scope, $log, MongoBlogFactory, _, hfs) {

    this.$scope = $scope;
    this.$log = $log;
    this._ = _;

    /** By using EMCAScript 5 defineProperty we can prevent the service or config file
     * from appearing in the template as a model
     * **/

    Object.defineProperties(this, {
      'MongoBlogFactory': {
        value: MongoBlogFactory
      },
      'hfs': {
        value: hfs
      },
      'createContentSnippet': {
        value: null,
        writable: true
      },
      'addSEOFriendlyURL': {
        value: null,
        writable: true
      }
    });

    /** List scope objects
     * **/
    this.$scope.editBlogFormData = {};
    this.$scope.dataToDelete = {};
    this.$scope.blogContent = null;
    this.$scope.editBlogFormSubmit = false;
    this.$scope.formSuccess = null;
    this.$scope.displayForm = null;
    this.$scope.displayPopup = false;

    /** Private functions
     * **/

    /** Take the content and create a snippet to be used in the blog index
     * **/
    this.createContentSnippet = function createContentSnippet() {

      // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
      var snippet, maxLength, trimmedString;

      snippet = this.$scope.editBlogFormData.content.toString();

      // maximum number of characters to extract
      maxLength = 130;

      //trim the string to the maximum length
      // make sure not include opening paragraph tag if any
      // hence, cut string at the third characters
      trimmedString = snippet.substr(3, maxLength);

      //re-trim if we are in the middle of a word
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ' ...';

      //strip and HTML tags
      this.$scope.editBlogFormData.contentSnippet = trimmedString.replace(/(<([^>]+)>)/ig, '').trim();

    };

    /** Create a SEO-friendly URL from the blog post title
     * **/
    this.addSEOFriendlyURL = function addSEOFriendlyURL() {

      var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

      var regexNonAlphaNum = /[^\-a-z0-9]/g;
      var regexWhiteSpace = /\s/gi;
      var twoDashes = /[\-]{2}/g;
      var x;
      var l;
      var newTitle;

      // initially remove hypthens and the white space to their right
      newTitle = this.$scope.editBlogFormData.title.replace(/\–\s/g, '').toLowerCase();

      x = 0;
      l = stopwords.length;

      // loop through the SEO watch words and replace with white space hythen
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

      newTitle = newTitle.replace(twoDashes, '-');


      this.$scope.editBlogFormData.url = newTitle;

    };

  };

  EditBlogCtrl.$inject = ['$scope', '$log', 'MongoBlogFactory', '_', 'helperFunctionsService'];

  /** Public methods
   * **/


  /** When the user clicks to edit a blog post the input fields are populated by the relevant data
   * **/
  EditBlogCtrl.prototype.editArticle = function (data) {

    // display form
    this.$scope.displayForm = true;

    // populate the ng-model with the data for the post to be edited
    this.$scope.editBlogFormData.title = data.title;
    this.$scope.editBlogFormData.author = data.author;
    this.$scope.editBlogFormData.category = data.category;
    this.$scope.editBlogFormData.content = data.content;
    this.$scope.editBlogFormData.aside = data.aside;
    this.$scope.editBlogFormData.displayImage = data.displayImage;
    this.$scope.editBlogFormData.uniqueId = data.uniqueId;
    this.$scope.editBlogFormData.publishedDate = data.publishedDate;
    this.$scope.editBlogFormData._id = data._id;
    this.$scope.editBlogFormData.commentsOpen = data.commentsOpen;
  };

  /** Called when the user submits the form
   * **/
  EditBlogCtrl.prototype.editBlog = function (isValid) {

    this.$scope.editBlogFormSubmit = true;

    // check to make sure the form is completely valid
    if (isValid) {

      this.$scope.editBlogFormData.url = this.hfs.addSEOFriendlyURL(this.$scope.editBlogFormData.title);
      this.$scope.editBlogFormData.contentSnippet = this.hfs.createContentSnippet(this.$scope.editBlogFormData.content);

      var formData = {
        title: this.$scope.editBlogFormData.title,
        author: this.$scope.editBlogFormData.author,
        category: this.$scope.editBlogFormData.category,
        content: this.$scope.editBlogFormData.content,
        aside: this.$scope.editBlogFormData.aside,
        displayImage: this.$scope.editBlogFormData.displayImage,
        uniqueId: this.$scope.editBlogFormData.uniqueId,
        publishedDate: this.$scope.editBlogFormData.publishedDate,
        id: this.$scope.editBlogFormData._id,
        url: this.$scope.editBlogFormData.url,
        contentSnippet: this.$scope.editBlogFormData.contentSnippet,
        allowComments: this.$scope.editBlogFormData.commentsOpen
      };

      var returnedPromise = this.MongoBlogFactory.editBlogPosts(formData);

      returnedPromise.then(function () {

        // display success message

        this.$scope.formSuccess = 'You have successfully updated the blog article';

        // reset scope to remove values from input fields
        // loop over form field models
        Object.keys(this.$scope.editBlogFormData).forEach(function (key) {

          this.$scope.editBlogFormData[key] = null;

        }, this);

        // hide form with ng-if
        this.$scope.displayForm = false;

        // update page again
        this.getBlogs();

      }.bind(this), function (value) {

        this.$log.warn('Failure: EditBlogCtrl.editBlog');
        this.$log.warn(value);

      }.bind(this));

    }
  };

  /** request all blogs from the blog document
   * which is then listed using ng-repeat
   * **/
  EditBlogCtrl.prototype.getBlogs = function () {

    var returnedPromise = this.MongoBlogFactory.getBlogPosts();

    returnedPromise.then(function (value) {

      if (this._.isObject(value.data)) {

        this.$scope.blogContent = value.data;

      }

    }.bind(this), function (value) {

      this.$log.warn('Failure: EditBlogCtrl.getBlogs');
      this.$log.warn(value);

    }.bind(this));

  };

  /** When the user clicks to delete a blog article the popup appears
   * asking again for confirmation and the local scope is populated with the
   * blog data ready for submission to the remote service
   * **/
  EditBlogCtrl.prototype.deleteArticle = function (data) {

    this.$scope.displayPopup = true;

    this.$scope.dataToDelete.title = data.title;
    this.$scope.dataToDelete.author = data.author;
    this.$scope.dataToDelete.category = data.category;
    this.$scope.dataToDelete.content = data.content;
    this.$scope.dataToDelete.displayImage = data.displayImage;

    this.$scope.dataToDelete._id = data._id;

  };

  /** On the confirmation popup is a chance for the user to cancel the delete action
   * **/
  EditBlogCtrl.prototype.hidePopup = function () {

    this.$scope.displayPopup = false;

  };

  /** On successful deletion of the blog article the pop-up is hidden,
   *  local scope is reset to null and the list of blog articles is updated
   * **/

  EditBlogCtrl.prototype.removeArticle = function () {

    var returnedPromise = this.MongoBlogFactory.deleteBlogPost(this.$scope.dataToDelete._id);

    returnedPromise.then(function (value) {

      if (value) {

        this.$scope.displayPopup = false;

        this.$scope.dataToDelete.title = null;
        this.$scope.dataToDelete.author = null;
        this.$scope.dataToDelete.category = null;
        this.$scope.dataToDelete.content = null;
        this.$scope.dataToDelete.aside = null;
        this.$scope.dataToDelete.displayImage = null;
        this.$scope.dataToDelete._id = null;
        this.$scope.dataToDelete.commentsOpen = null;

        // update page again
        this.getBlogs();

      }

    }.bind(this), function (value) {

      this.$log.warn('Failure: EditBlogCtrl.removeArticle()');
      this.$log.warn(value);

    }.bind(this));

  };

  app.controller('EditBlogCtrl', EditBlogCtrl);

}());
