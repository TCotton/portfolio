// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/components/angular/angular.js',
      'app/components/angular-mocks/angular-mocks.js',
      'app/components/angular-resource/angular-resource.js',
      'app/components/angular-sanitize/angular-sanitize.js',
      'app/components/angular-route/angular-route.js',
      'app/components/underscore/underscore.js',
      'app/components/angular-cache/dist/angular-cache.js',
      'app/components/moment/moment.js',
      'app/libs/*.js',
      'app/app.js',
      'app/config/*.js',
      'app/shared/*.js',
      'app/footer/*.js',
      'app/homepage/*.js',
      'app/work-projects/*.js',
      'app/side-projects/*.js',
      'app/blog-comments/*.js',
      'app/blog-sidebar/*.js',
      'app/blog-pages/*.js',
      'app/blog-admin/*.js',
      'app/misc/*.js',
      'app/sitemap/*.js',
      'app/contact/*.js',
      'test/spec/**/*.js',
      'app/shared/helperFunctionService.js'
    ],

    // list of files / patterns to exclude
    exclude: [ ],


    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      // source files we want to generate coverage for
      'app/scripts/**/*.js': ['coverage'],
      'app/views/**/*.html': ['ng-html2js']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
