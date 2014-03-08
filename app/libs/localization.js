'use strict';

/*
 * An AngularJS Localization Service
 *
 * Written by Jim Lavin
 * http://codingsmackdown.tv
 *
 */

angular.module('localization', [])
  // localization service responsible for retrieving resource files from the server and
  // managing the translation dictionary
  .factory('localize', ['$http', '$rootScope', '$window', '$filter', function ($http, $rootScope, $window, $filter) {
    var localize = {
      // use the $window service to get the language of the user's browser
      language: '',
      // array to hold the localized resource string entries
      dictionary: [],
      // location of the resource file
      url: undefined,
      // flag to indicate if the service hs loaded the resource file
      resourceFileLoaded: false,

      // success handler for all server communication
      successCallback: function (data) {
        // store the returned array in the dictionary
        localize.dictionary = data;
        // set the flag that the resource are loaded
        localize.resourceFileLoaded = true;
        // broadcast that the file has been loaded
        $rootScope.$broadcast('localizeResourcesUpdated');
      },

      // allows setting of language on the fly
      setLanguage: function (value) {
        localize.language = value;
        localize.initLocalizedResources();
      },

      // allows setting of resource url on the fly
      setUrl: function (value) {
        localize.url = value;
        localize.initLocalizedResources();
      },

      // builds the url for locating the resource file
      buildUrl: function () {
        if (!localize.language) {
          var lang, androidLang;
          // works for earlier version of Android (2.3.x)
          if ($window.navigator && $window.navigator.userAgent && (androidLang = $window.navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i))) {
            lang = androidLang[1];
          } else {
            // works for iOS, Android 4.x and other devices
            lang = $window.navigator.userLanguage || $window.navigator.language;
          }
          // set language
          localize.language = lang;
        }
        return '/i18n/resources-locale_' + localize.language + '.js';
      },

      // loads the language resource file from the server
      initLocalizedResources: function () {
        // build the url to retrieve the localized resource file
        var url = localize.url || localize.buildUrl();
        // request the resource file
        $http({ method: "GET", url: url, cache: false }).success(localize.successCallback).error(function () {
          // the request failed set the url to the default resource file
          var url = 'i18n/resources-locale_default.js';
          // request the default resource file
          $http({ method: "GET", url: url, cache: false }).success(localize.successCallback);
        });
      },

      // checks the dictionary for a localized resource string
      getLocalizedString: function (value) {
        // default the result to an empty string
        var result = '';

        // make sure the dictionary has valid data
        if ((localize.dictionary !== []) && (localize.dictionary.length > 0)) {
          // use the filter service to only return those entries which match the value
          // and only take the first result
          var entry = $filter('filter')(localize.dictionary, function (element) {
              return element.key === value;
            }
          )[0];

          // set the result
          result = entry.value;
        }
        // return the value to the call
        return result;
      }
    };

    // force the load of the resource file
    localize.initLocalizedResources();

    // return the local instance when called
    return localize;
  } ]);