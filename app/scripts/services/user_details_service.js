/**
 * Created by awalpole on 09/04/2014.
 */

/**
 * Created by awalpole on 09/04/2014.
 */

'use strict';

(function () {

  var app = angular.module('portfolioApp');

  var UserDetailsService = function (UsersMongoDB) {

    this.UsersMongoDB = UsersMongoDB;

  };

  UserDetailsService.$inject = ['UsersMongoDB'];

  UserDetailsService.prototype.getUsers = function(query, optionalArg) {

//    result.then(function (greeting) {
//      console.log('Success: ' + greeting);
//    }, function (reason) {
//      console.log('Failed: ' + reason);
//    }, function (update) {
//      console.log('Got notification: ' + update);
//    });

    var result;

    // default value of attribute if not defined
    optionalArg = (typeof optionalArg === 'undefined') ? {} : optionalArg;

    // injUsers returns a promise, which has a then function, which also returns a promise

    result = this.UsersMongoDB.query(optionalArg, query).then(function (queryResult) {

      // The then function here is an opportunity to modify the response
      // The return value gets picked up by the then in the controller.

      return queryResult;

    });

    // Return the promise to the controller
    return result;

  };

  UserDetailsService.prototype.addUsers = function() {

    //var result = this.UsersMongoDB.$save();

    //return result;

  };

  app.service('UserDetailsService', UserDetailsService);

}());