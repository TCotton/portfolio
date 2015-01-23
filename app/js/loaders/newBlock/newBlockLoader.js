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
    'admin/containers/newBlock/newBlockContainer',
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
      ['newBlockModule', 'ui.router', 'ngMessages', 'AppConstants', 'ngSanitize', 'restangular', 'ui.bootstrap', 'ngAnimate']
    );

  }
);
