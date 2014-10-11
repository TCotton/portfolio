/* global window */
(function stopAngularOverrides(angular) {
  'use strict';

  if (!angular) {
    throw new Error('Missing angular');
  }

  var _module = angular.bind(angular, angular.module);

  var existingModules = Object.create(null);
  var existingFilters = Object.create(null);
  var existingControllers = Object.create(null);

  angular.module = function (name, deps) {
    if (!deps) {
      return _module(name);
    }
    if (existingModules[name]) {
      throw new Error('Angular module ' + name + ' already exists');
    }
    existingModules[name] = true;
    var m = _module(name, deps);

    // proxy .filter calls to the new module
    var _filter = angular.bind(m, m.filter);
    m.filter = function (name, fn) {
      if (!fn) {
        return _filter(name);
      }
      if (existingFilters[name]) {
        throw new Error('Angular filter ' + name + ' already exists');
      }
      existingFilters[name] = true;
      return _filter(name, fn);
    };

    // proxy .controller calls to the new module
    var _controller = angular.bind(m, m.controller);
    m.controller = function (name, deps) {
      if (!deps) {
        return _controller(name);
      }
      if (existingControllers[name]) {
        throw new Error('Angular controller ' + name + ' already exists');
      }
      existingControllers[name] = true;
      return _controller(name, deps);
    };

    return m;
  };

}(window.angular));