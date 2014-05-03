/**
 * Created by awalpole on 30/04/2014.
 */

'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Comments', {
  name : String,
  email: String,
  url: String,
  message: String,
  blogId: String,
  published: Boolean,
  publishedDate: Date
});

