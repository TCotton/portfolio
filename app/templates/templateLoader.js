/**
 * Require Callback function: Angular Loader: Admin User Loader
 */

require([
    'angular',
    'ng_sanitize',
    'ng_messages',
    'ng_animate',
    'ui_router',
    'lodash',
    'ng_constants',
    'admin/containers/common/commonContainer',
    'admin/containers/<%= sectionName %>/<%= sectionName %>Container',
    'bootstrap/main/bootstrap-tpls',
    'restangular',
    'shared/modules/vendor/angular-idle',
    'admin/modules/session/sessionModule'
  ],

  function (angular) {
    'use strict';
    //Adding modules as loading level, creating a custom loader
    angular.bootstrap(
      document,
      ['<%= sectionName %>Module', 'ui.router', 'ngMessages', 'AppConstants', 'ngSanitize', 'restangular', 'ui.bootstrap', 'ngAnimate']
    );

  }
);
