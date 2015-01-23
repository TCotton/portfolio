define(function () {
  'use strict';

  //called/used as a factory
  return function () {

    var _getCollection;
    var _putCollection;
    var _postCollection;
    var _deleteCollection;

    _getCollection = function _getCollection() {
      return true;
    };

    _putCollection = function _putCollection() {
      return true;
    };

    _postCollection = function _postCollection() {
      return true;
    };

    _deleteCollection = function _deleteCollection() {
      return true;
    };

    return {

      getCollection: function getCollection() {

        return _getCollection();

      },

      putCollection: function putCollection() {

        return _putCollection();

      },

      postCollection: function postCollection() {

        return _postCollection();

      },

      deleteCollection: function deleteCollection() {

        return _deleteCollection();

      }

    };

  };

});
