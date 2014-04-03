/**
 * Created by awalpole on 01/04/2014.
 */
'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var BlogCtrl = function ($q, FeedService) {
    this.FeedService = FeedService;
//    this.totalArticles = null;
//    this.totalOldArticles = null;
//    this.totalNewArticles = null;
//    this.oldBlogPosts = null;
  };

  BlogCtrl.$inject = ['$q', 'FeedService'];

//  BlogCtrl.prototype.grabFeed = function() {
//
//    var _this = this;
//
//    _this.FeedService.returnedRSS()
//      .then(function (response) {
//
//        if (response.status === 200) {
//
//          // cache the total number of items returned
//          _this.totalOldArticles = _.size(response.data.responseData.feed.entries);
//          _this.oldBlogPosts = response.data.responseData.feed.entries;
//          _this.sortOldBlogPosts(response.data.responseData.feed.entries);
//
//        }
//      });
//  };


  app.controller('BlogCtrl', BlogCtrl);

}());
