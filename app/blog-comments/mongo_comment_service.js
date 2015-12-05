'use strict';
(function() {
  class MongoCommentService {

    /**
     * @param $http {object}
     * @param $q {object}
     */

    constructor($http, $q) {
      this.$http = $http;
      this.$q = $q;
    }

    /**
     * @param formData {object}
     * @returns {*}
     */
    addComment(formData) {

      const deferred = this.$q.defer();

      let returnedMessage = this.$http({
        url: '/api/comment/add',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;
    }

    getComments() {

      const deferred = this.$q.defer();

      let returnedMessage = this.$http({
        url: '/api/comment/get',
        method: 'GET'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;
    }

    /**
     *
     * @param formData
     * @returns {*}
     */

    editComment(formData) {

      const deferred = this.$q.defer();

      let returnedMessage = this.$http({
        url: '/api/comment/update',
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;
    }

    /**
     *
     * @param data
     * @returns {*}
     */

    getPubilshedComments(data) {

      const deferred = this.$q.defer();

      let returnedMessage = this.$http({
        url: '/api/comment/getPublished',
        method: 'GET',
        params: data
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;
    }

    /**
     *
     * @param formData
     * @returns {*}
     */

    deleteComment(formData) {

      const deferred = this.$q.defer();

      let returnedMessage = this.$http({
        url: '/api/comment/delete/' + formData,
        method: 'DELETE'
      });

      deferred.resolve(returnedMessage);

      return deferred.promise;
    }

  }

  angular.module('portfolioApp.blogCommentsService').service('MongoCommentService', ['$http', '$q', function($http, $q) {
    return new MongoCommentService($http, $q);
  }]);

}());
