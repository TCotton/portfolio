/**
 * Created by awalpole on 20/04/2014.
 */

'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Blog', {
  title : String,
  author: String,
  category: String,
  content: String,
  contentSnippet: String,
  publishedDate: String,
  url: String,
  uniqueId: String,
  displayImage: String,
  commentsOpen: Boolean
});
