'use strict';
(function() {
  class CommentCtrl {

    /**
     * @description For displaying and the submission of blog comments
     * @param $scope {object}
     * @param $rootScope {object}
     * @param MongoCommentService {object}
     * @param $log {object}
     * @param $timeout {function}
     * @constructor
     */

    constructor($scope, $rootScope, MongoCommentService, $log, $timeout) {

      this.$scope = $scope;
      this.$rootScope = $rootScope;
      this.$log = $log;
      this.$timeout = $timeout;

      /** Using defineProperty prevents injected service being exposed to the template
       * **/
      Object.defineProperty(this, 'MongoCommentService', {
        value: MongoCommentService
      });

      this.$scope.commentBlogFormSubmit = false;
      this.$scope.publishComments = null;
      this.$scope.commentFormData = {};
      this.$scope.zipRegex = /(?!.*)/;

      // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
      this.$scope.commentFormData.blogId = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf('/blog/') + 6, this.$rootScope.currentPage.indexOf('/blog/') + 12);

    }

    retreiveComment() {

      let data = {
        blogId: this.$scope.commentFormData.blogId
      };

      const returnedData = this.MongoCommentService.getPubilshedComments(data);

      returnedData.then((result) => {

        if (!_.isEmpty(result.data)) {

          this.$scope.publishComments = result.data;

        }

      }, (result) => {
        this.$log.warn('Failure: CommentCtrl.retreiveComment');
        this.$log.warn(result);
      });

    }

    submitComment(isValid) {

      this.$scope.commentBlogFormSubmit = true;

      if (!isValid) {

        this.$scope.formFailure = 'The form has not been submitted because of errors. Please review the form error messages and click submit again';
        this.$timeout(function() {
          document.querySelector('.comment-form-failure').focus();
        }, 0);

      }

      if (isValid) {

        let returnedData = this.MongoCommentService.addComment(this.$scope.commentFormData);

        returnedData.then(() => {

          this.$scope.formFailure = null;
          this.$scope.formSuccess = 'You have successfully submitted a blog comment';
          this.$timeout(function() {
            document.querySelector('.comment-form-success').focus();
          }, 0);

          // reset scope to remove values from input fields
          // loop over form field models
          Object.keys(this.$scope.commentFormData).forEach(function(key) {
            this.$scope.commentFormData[key] = null;
          }, this);

          this.$scope.commentBlogFormSubmit = false;

        }, (value) => {
          this.$log.warn('Failure: CommentCtrl.submitComment');
          this.$log.warn(value);
        });

      }
    }
  }

  CommentCtrl.$inject = ['$scope', '$rootScope', 'MongoCommentService', '$log', '$timeout'];

  angular.module('portfolioApp.blogAdminController').controller('CommentCtrl', ['$scope', '$rootScope', 'MongoCommentService', '$log', '$timeout', function($scope, $rootScope, MongoCommentService, $log, $timeout) {
    return new CommentCtrl($scope, $rootScope, MongoCommentService, $log, $timeout);
  }]);

}());
