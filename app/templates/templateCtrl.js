define(function () {
  'use strict';

  var <%= sectionName %>Ctrl = function <%= sectionName %>Ctrl($scope) {

    this.$scope = $scope;
    this.$scope.message = 'Victory!';

  };

  <%= sectionName %>Ctrl.prototype.run = function run() {
    alert(this.$scope.message);
  };

  <%= sectionName %>Ctrl.prototype.publish = function publish() {
    console.log('publish function');
  };

  <%= sectionName %>Ctrl.prototype.save = function save() {
    console.log('save function');
  };

  <%= sectionName %>Ctrl.prototype.undo = function undo() {
    console.log('undo function');
  };

  <%= sectionName %>Ctrl.prototype.preview = function preview() {
    console.log('preview function');
  };

  return <%= sectionName %>Ctrl;

});
