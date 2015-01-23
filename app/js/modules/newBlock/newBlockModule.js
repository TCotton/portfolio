/**
 * Require Module: Angular Module: Common Module
 */
define(function (require) {
  'use strict';

  var angular = require('angular');

  require('ng_cookies');

  var newBlockModule = angular.module('newBlockModule', ['sessionModule', 'ngCookies']);

  /**
   * Configuration of edition module config module
   * being able to register other components in its constructor function
   */
  newBlockModule.config(function ($controllerProvider) {
    newBlockModule.controllerProvider = $controllerProvider;
  });

  return newBlockModule;
});
