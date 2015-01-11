/**
 * Require Module: Angular Module: Common Module
 */
define(function (require) {
  'use strict';

  var angular = require('angular');

  require('ng_cookies');

  var <%= sectionName %>Module = angular.module('<%= sectionName %>Module', ['sessionModule', 'ngCookies']);

  /**
   * Configuration of edition module config module
   * being able to register other components in its constructor function
   */
  <%= sectionName %>Module.config(function ($controllerProvider) {
    <%= sectionName %>Module.controllerProvider = $controllerProvider;
  });

  return <%= sectionName %>Module;
});
