/**
 * Created by awalpole on 06/10/2014.
 */
'use strict';
angular.module('portfolioApp.blogPagesService').factory('BlogDataFactory', ['$http', '$q', 'MongoBlogService', '$angularCacheFactory', 'CONFIG', function ($http, $q, MongoBlogService, $angularCacheFactory, CONFIG) {

  /* cache the relevant data in either session or storage
   * **/
  var _cache = function (blog) {

    $angularCacheFactory.get('blogCache').put('totalArticles', blog.data.totalArticles);
    $angularCacheFactory.get('blogCache').put('allBlogPosts', blog.data.BlogPosts);

  };

  return {

    retrieveData: function () {

      var _blogData;
      var deferred = $q.defer();

      // remove cache for debugging purposes
      if ($angularCacheFactory.get('authCache').get('logginIn')) {

        $angularCacheFactory.get('blogCache').removeAll();

      }

      // use a a cache means that it is possible to bypass the above methods and just serve up the data
      if (!$angularCacheFactory.get('blogCache').get('allBlogPosts')) {

        // through a POST service supply the RSS url and the images in the CONFIG.BLOG object to be added the individual blog post objects
        MongoBlogService.getOldBlogPosts({RSSFeed: CONFIG.RSS_FEED_LINK, BLOG: CONFIG.BLOG}).then(function (value) {

          _blogData = value;
          _cache(value);

        }, function () {
        }).then(function () {

          deferred.resolve(_blogData);

        });

      }

      return deferred.promise;

    }

  };

}]);