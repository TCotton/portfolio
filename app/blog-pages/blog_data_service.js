'use strict';
(function() {
  class BlogDataService {

    /**
     * @param $http {function}
     * @param $q {function}
     * @param MongoBlogFactory {object}
     * @param $angularCacheFactory {function}
     * @param CONFIG {object}
     * @param storage {object}
     */

    constructor($http, $q, MongoBlogFactory, $angularCacheFactory, CONFIG, storage) {
      this.$http = $http;
      this.$q = $q;
      this.MongoBlogFactory = MongoBlogFactory;
      this.$angularCacheFactory = $angularCacheFactory;
      this.CONFIG = CONFIG;
      this.storage = storage;
    }

    retrieveData() {

      let _blogData;
      const deferred = this.$q.defer();

      // remove cache for debugging purposes
      if (this.$angularCacheFactory.get('authCache').get('logginIn')) {
        this.$angularCacheFactory.get('blogCache').removeAll();
      }

      // use a a cache means that it is possible to bypass the above methods and just serve up the data
      if (!this.$angularCacheFactory.get('blogCache').get('allBlogPosts')) {

        // through a POST service supply the RSS url and the images in the CONFIG.BLOG object to be added the individual blog post objects
        this.MongoBlogFactory.getOldBlogPosts({
          RSSFeed: this.CONFIG.RSS_FEED_LINK,
          BLOG: this.CONFIG.BLOG
        }).then((value) => {

          _blogData = value;

          if (this.storage.localstorage) {
            this.$angularCacheFactory.get('blogCache').put('totalArticles', value.data.totalArticles);
            this.$angularCacheFactory.get('blogCache').put('allBlogPosts', value.data.BlogPosts);
          }

        }, function() {
        }).then(function() {
          deferred.resolve(_blogData);
        });

      }

      return deferred.promise;

    }

  }

  angular.module('portfolioApp.blogPagesService').service('BlogDataService', ['$http', '$q', 'MongoBlogFactory', '$angularCacheFactory', 'CONFIG', 'storage', function($http, $q, MongoBlogFactory, $angularCacheFactory, CONFIG, storage) {
    return new BlogDataService($http, $q, MongoBlogFactory, $angularCacheFactory, CONFIG, storage);
  }]);

}());
