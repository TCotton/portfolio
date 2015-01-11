/**
 *  Require Module: Angular Container: editFooter Container
 *  <%= grunt.template.today('yyyy') %>
 */
define(function (require) {
  'use strict';

  var <%= sectionName %>Module            = require('admin/modules/<%= sectionName %>/<%= sectionName %>Module');
  var <%= sectionName %>Ctrl              = require('admin/controllers/<%= sectionName %>/<%= sectionName %>Ctrl');

  <%= sectionName %>Module.controller('<%= sectionName %>Ctrl', [<%= sectionName %>Ctrl]);

  return <%= sectionName %>Module;

});

