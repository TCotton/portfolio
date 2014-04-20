/**
 * Created by awalpole on 20/04/2014.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
  name : String,
  password: String
});