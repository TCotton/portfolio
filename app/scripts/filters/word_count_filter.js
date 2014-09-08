/**
 * Created by awalpole on 01/09/2014.
 */
'use strict';
angular.module('portfolioApp.filters').filter('wordcount', function() {
  return function(input) {

    var s = input;
    s = s.replace(/(^\s*)|(\s*$)/gi,'');
    s = s.replace(/[ ]{2,}/gi,' ');
    s = s.replace(/\n /,'\n');
    return s.split(' ').length;

  };
});
