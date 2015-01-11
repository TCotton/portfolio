/**
 *  Require Module: Angular Container: editFooter Container
 *  2015
 */
define(function (require) {
  'use strict';

  var newBlockModule            = require('admin/modules/newBlock/newBlockModule');
  var newBlockCtrl              = require('admin/controllers/newBlock/newBlockCtrl');

  newBlockModule.controller('newBlockCtrl', [newBlockCtrl]);

  return newBlockModule;

});

