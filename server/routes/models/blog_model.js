/**
 * Created by awalpole on 20/04/2014.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Blog Schema
 */
var BlogSchema = new Schema({
  title: {
    type: String,
    default: '',
    trim: true
  },
  author: {
    type: String,
    default: '',
    trim: true
  },
  category: {
    type: String,
    default: '',
    trim: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  contentSnippet: {
    type: String,
    default: '',
    trim: true
  },
  aside: {
    type: String,
    trim: true
  },
  publishedDate: {
    type: String,
    default: '',
    trim: true
  },
  url: {
    type: String,
    default: '',
    trim: true
  },
  uniqueId: {
    type: String,
    default: '',
    trim: true,
    unique: true
  },
  displayImage: {
    type: String,
    trim: true
  },
  commentsOpen: {
    type: Boolean,
    default: false
  }

});

module.exports = mongoose.model('Blog', BlogSchema);
