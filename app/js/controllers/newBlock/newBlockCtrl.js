define(function () {
  'use strict';

  var newBlockCtrl = function newBlockCtrl($scope) {

    this.$scope = $scope;
    this.$scope.message = 'Victory!';

  };

  newBlockCtrl.prototype.run = function run() {
    alert(this.$scope.message);
  };

  newBlockCtrl.prototype.publish = function publish() {
    console.log('publish function');
  };

  newBlockCtrl.prototype.save = function save() {
    console.log('save function');
  };

  newBlockCtrl.prototype.undo = function undo() {
    console.log('undo function');
  };

  newBlockCtrl.prototype.preview = function preview() {
    console.log('preview function');
  };

  return newBlockCtrl;

});
