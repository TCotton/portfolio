'use strict';
(function() {
  class MongoCommentService {

    /**
     * @param $http {object}
     * @param $q {object}
     */

    constructor($http, $q) {
      this.$http = $http;
      this.deferred = $q.defer();
    }

    /**
     * @param formData {object}
     * @returns {*}
     */
    addComment(formData) {

      let returnedMessage = this.$http({
        url: '/api/comment/add',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      this.deferred.resolve(returnedMessage);

      return this.deferred.promise;
    }

    getComments() {

      let returnedMessage = this.$http({
        url: '/api/comment/get',
        method: 'GET'
      });

      this.deferred.resolve(returnedMessage);

      return this.deferred.promise;
    }

    /**
     *
     * @param formData
     * @returns {*}
     */

    editComment(formData) {

      let returnedMessage = this.$http({
        url: '/api/comment/update',
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      this.deferred.resolve(returnedMessage);

      return this.deferred.promise;
    }

    /**
     *
     * @param data
     * @returns {*}
     */

    getPubilshedComments(data) {

      let returnedMessage = this.$http({
        url: '/api/comment/getPublished',
        method: 'GET',
        params: data
      });

      this.deferred.resolve(returnedMessage);

      return this.deferred.promise;
    }

    /**
     *
     * @param formData
     * @returns {*}
     */

    deleteComment(formData) {

      let returnedMessage = this.$http({
        url: '/api/comment/delete/' + formData,
        method: 'DELETE'
      });

      this.deferred.resolve(returnedMessage);

      return this.deferred.promise;
    }

  }

  angular.module('portfolioApp.blogCommentsService').service('MongoCommentService', ['$http', '$q', function($http, $q) {
    return new MongoCommentService($http, $q);
  }]);

}());
