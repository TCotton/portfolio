// Generated on 2013-07-31 using generator-angular 0.3.1
'use strict';

// no more needed, see grunt-express doc
//var LIVERELOAD_PORT = 35729;
//var lrSnippet = require('express-livereload')({ port: LIVERELOAD_PORT });
//var mountFolder = function (express, dir) {
//  return express.static(require('path').resolve(dir));
//};

var path = require('path');
var fs = require('fs');

var packageJson = require('./node_modules/sw-precache/package.json');
var swPrecache = require('./node_modules/sw-precache/lib/sw-precache.js');


// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  /*jshint camelcase: false */
  // load all grunt tasks
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    // configurable paths
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    server: 'server'
  };

  try {
    yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
  } catch (e) {
  }

  grunt.initConfig({
    yeoman: yeomanConfig,
    pkg: grunt.file.readJSON('package.json'),
    swPrecache: {
      dev: {
        handleFetch: false,
        rootDir: '<%= yeoman.app %>'
      },
      dist: {
        handleFetch: false,
        rootDir: '<%= yeoman.dist %>'
      }
    },
    watch: {
      js: {
        files: [
          '<%= yeoman.app %>/footer/*.js',
          '<%= yeoman.app %>/homepage/*.js',
          '<%= yeoman.app %>/work-projects/*.js',
          '<%= yeoman.app %>/side-projects/*.js',
          '<%= yeoman.app %>/about-me/*.js',
          '<%= yeoman.app %>/contact/*.js',
          '<%= yeoman.app %>/blog-comments/*.js',
          '<%= yeoman.app %>/blog-sidebar/*.js',
          '<%= yeoman.app %>/blog-pages/*.js',
          '<%= yeoman.app %>/sitemap/*.js',
          '<%= yeoman.app %>/blog-admin/*.js',
          '<%= yeoman.app %>/misc/*.js',
          '<%= yeoman.app %>/config/*.js',
          '<%= yeoman.app %>/shared/*.js',
          '<%= yeoman.app %>/app.js'
        ],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= express.livereload.options %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      e2eTest: {
        files: ['test/e2e/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'protractor-e2e']
      },
      sass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass:dev']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= express.livereload.options %>'
        },
        files: [
          '<%= yeoman.app %>/views/{,*/}*.html',
          '<%= yeoman.app %>/footer/*.html',
          '<%= yeoman.app %>/homepage/*.html',
          '<%= yeoman.app %>/work-projects/*.html',
          '<%= yeoman.app %>/side-projects/*.html',
          '<%= yeoman.app %>/about-me/*.html',
          '<%= yeoman.app %>/contact/*.html',
          '<%= yeoman.app %>/blog-comments/*.html',
          '<%= yeoman.app %>/blog-sidebar/*.html',
          '<%= yeoman.app %>/blog-pages/*.html',
          '<%= yeoman.app %>/blog-admin/*.html',
          '<%= yeoman.app %>/sitemap/*.html',
          '<%= yeoman.app %>/misc/*.html',
          '<%= yeoman.app %>/shared/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.app %>/index.html'
        ]
      }
    },


    express: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      livereload: {
        options: {
          server: path.resolve('./server.js'),
          livereload: true,
          serverreload: false,
          open: true,
          bases: [path.resolve('./.tmp'), path.resolve(__dirname, yeomanConfig.app)]
        }
      },
      test: {
        options: {
          server: path.resolve('./server.js'),
          bases: [path.resolve('./.tmp'), path.resolve(__dirname, 'test'), '<%= yeoman.app %>']
        }
      },
      dist: {
        options: {
          server: path.resolve('./server.js'),
          bases: path.resolve(__dirname, yeomanConfig.dist)
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//,
        options: {
          exclude: ['<%= yeoman.app %>/dev-tools/*.js']
        }
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    preprocess : {
      options: {
        inline: true,
        context : {
          DEBUG: false
        }
      },
      html : {
        src : [
          '<%= yeoman.dist %>/index.html'
        ]
      },
      js : {
        src: '.tmp/concat/scripts/*.js'
      }
    },

    /**
     * Sass
     */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: {
          '<%= yeoman.app %>/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          lineNumbers: false
        },
        files: {
          '<%= yeoman.dist %>/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.dist %>/*',
              '!<%= yeoman.dist %>/.git*'
            ]
          }
        ]
      },
      server: '.tmp'
    },
    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/footer/{,*/}*.js',
        '<%= yeoman.app %>/homepage/{,*/}*.js',
        '<%= yeoman.app %>/work-projects/*.js',
        '<%= yeoman.app %>/side-projects/*.js',
        '<%= yeoman.app %>/about-me/*.js',
        '<%= yeoman.app %>/contact/*.js',
        '<%= yeoman.app %>/blog-comments/*.js',
        '<%= yeoman.app %>/blog-sidebar/*.js',
        '<%= yeoman.app %>/blog-pages/*.js',
        '<%= yeoman.app %>/blog-admin/*.js',
        '<%= yeoman.app %>/sitemap/*.js',
        '<%= yeoman.app %>/misc/*.js',
        '<%= yeoman.app %>/shared/*.js',
        '<%= yeoman.app %>/app.js',
        //'<%= yeoman.server %>/**/*.js',
        '!<%= yeoman.app %>/**/config/constants.js' // ignore auto generated constants file'
      ],
      test: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['test/spec/{,*/}*.js', '!test/e2e/{,*/}*.js', '!test/spec/config/constants.js']
      }
    },
    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            /* '<%= yeoman.dist %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',*/
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },

    uglify: {
      options: {
        mangle: true,
        compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true
        }
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: [
        '<%= yeoman.dist %>/{,*/}*.html',
        '<%= yeoman.dist %>/footer/*.html',
        '<%= yeoman.dist %>/homepage/*.html',
        '<%= yeoman.dist %>/work-projects/*.html',
        '<%= yeoman.dist %>/side-projects/*.html',
        '<%= yeoman.dist %>/about-me/*.html',
        '<%= yeoman.dist %>/contact/*.html',
        '<%= yeoman.dist %>/blog-comments/*.html',
        '<%= yeoman.dist %>/blog-sidebar/*.html',
        '<%= yeoman.dist %>/blog-pages/*.html',
        '<%= yeoman.dist %>/blog-admin/*.html',
        '<%= yeoman.dist %>/sitemap/*.html',
        '<%= yeoman.dist %>/shared/*.html',
        '<%= yeoman.dist %>/misc/*.html'
      ],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    inline: {
      dist: {
        options: {
          uglify: true
        },
        src: ['<%= yeoman.app %>/index.html'],
        dest: '<%= yeoman.dist %>/index.html'
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.{png,jpg,jpeg,gif}',
            dest: '<%= yeoman.dist %>/images'
          }
        ]
      }
    },
    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%= yeoman.dist %>/images'
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.dist %>',
            src: [
              '*.html',
              'views/{,*/}*.html',
              'footer/*.html',
              'homepage/*.html',
              'work-projects/*.html',
              'side-projects/*.html',
              'about-me/*.html',
              'contact/*.html',
              'blog-comments/*.html',
              'blog-sidebar/*.html',
              'blog-pages/*.html',
              'blog-admin/*.html',
              'sitemap/*.html',
              'misc/*.html',
              'shared/*.html'
            ],
            dest: '<%= yeoman.dist %>'
          }
        ]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              'views/{,*/}*.html',
              'footer/*.html',
              'homepage/*.html',
              'work-projects/*.html',
              'side-projects/*.html',
              'about-me/*.html',
              'contact/*.html',
              'blog-comments/*.html',
              'blog-sidebar/*.html',
              'blog-pages/*.html',
              'blog-admin/*.html',
              'sitemap/*.html',
              'misc/*.html',
              'shared/*.html',
              'components/**/*',
              'images/{,*/}*.{webp}',
              'fonts/*',
              'shared/functionWebWorker.js',
              'misc/service-worker-registration.js'
            ]
          },
          {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= yeoman.dist %>/images',
            src: ['generated/*']
          }
        ]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },



    ngconstant: {
      build: {
        options: {
          name: 'AppConstants',
          dest: '<%= yeoman.app %>/config/constants.js',
          constants: {
            SLIDER: grunt.file.readJSON('app/config/slider.json'),
            CONFIG: grunt.file.readJSON('app/config/config.json'),
            WORK: grunt.file.readJSON('app/config/work_pages.json'),
            PROJECTS: grunt.file.readJSON('app/config/projects_pages.json'),
            STATS: grunt.file.readJSON('app/config/front_page_stats.json')
          },
          values: {
            debug: false
          }
        }
      },
      test: {
        options: {
          dest: 'test/spec/config/constants.js',
          name: 'testConstants'
        },
        constants: {
          MOCK_DATA: grunt.file.readJSON('test/spec/config/testing_data.json')
        }
      }
    },

    concurrent: {
      server: [
        'sass:dev'
      ],
      test: [
        'sass:dev'
      ],
      dist: [
        'sass:dist',
        'imagemin',
        'svgmin'
      ],
      protractor_test: ['protractor-chrome']
    },

    protractor: {
      options: {
        configFile: 'e2e.conf.js', // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      run_chrome: {
        options: {
          configFile: 'e2e.conf.js', // Default config file
          args: {
            browser: 'chrome'
          }
        }
      }
 /*     run_firefox: {
        configFile: 'e2e.conf.js', // Default config file
        options: {
          args: {
            browser: 'firefox'
          }
        }
      }*/
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: '*.js',
            dest: '.tmp/concat/scripts'
          }
        ]
      }
    },

    template_to_files: {
      options: {
        // Task-specific options go here.
        Container: '<%= yeoman.app %>' + '/js/containers/',
        Ctrl: '<%= yeoman.app %>' + '/js/controllers/',
        Loader: '<%= yeoman.app %>' + '/js/loaders/',
        'page.html': '<%= yeoman.app %>' + '/js/templatesPage/',
        'view.html': '<%= yeoman.app %>' + '/js/templatesView/',
        Module: '<%= yeoman.app %>' + '/js/modules/',
        RestService: '<%= yeoman.app %>' + '/js/services/',
        fileGroupNames: ['Module', 'Container', 'Ctrl', 'Loader', 'RestService', 'page.html', 'view.html'],
        sectionName: 'newBlock' // !important
      },
      build: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            src: [
              '/templates/*.{html,js}'
            ]
          }
        ]
      }
    }
  });

  function generateServiceWorkerFileContents(rootDir, handleFetch, callback) {
    var config = {
      cacheId: packageJson.name,
      dynamicUrlToDependencies: {
        './': [path.join(rootDir, 'index.html')]
     /*   'dynamic/page1': [
          path.join(rootDir, 'footer', 'footer.html'),
          path.join(rootDir, 'blog-pages', 'blog.html'),
          path.join(rootDir, 'blog-sidebar', 'sidebar.html')
        ],
        'dynamic/page2': [
          path.join(rootDir, 'footer', 'footer.html'),
          path.join(rootDir, 'blog-pages', 'blog_page.html'),
          path.join(rootDir, 'blog-sidebar', 'sidebar.html'),
          path.join(rootDir, 'footer', 'footer.html')
        ]*/
      },
      // If handleFetch is false (i.e. because this is called from swPrecache:dev), then
      // the service worker will precache resources but won't actually serve them.
      // This allows you to test precaching behavior without worry about the cache preventing your
      // local changes from being picked up during the development cycle.
      // /Applications/MAMP/htdocs/portfolio/dist/footer/footer.html
      // /Applications/MAMP/htdocs/portfolio/dist/blog-pages/blog.html
      // /Applications/MAMP/htdocs/portfolio/dist/blog-sidebar/sidebar.html
      // /Applications/MAMP/htdocs/portfolio/dist/blog-pages/blog_page.html
      // /Applications/MAMP/htdocs/portfolio/dist/footer/footer.html
      handleFetch: handleFetch,
      logger: grunt.log.writeln,
      staticFileGlobs: [
        rootDir + '/styles/**.css',
        rootDir + '/blog-pages/**.html',
        rootDir + '/blog-comments/**.html',
        rootDir + '/blog-sidebar/**.html',
        rootDir + '/blog-comments/**.html',
        rootDir + '/footer/**.html',
        rootDir + '/scripts/**.js'
      ],
      stripPrefix: path.join(rootDir, path.sep)
    };

    swPrecache(config, callback);
  }

  grunt.registerMultiTask('swPrecache', function() {
    var done = this.async();
    var rootDir = this.data.rootDir;
    var handleFetch = this.data.handleFetch;

    generateServiceWorkerFileContents(rootDir, handleFetch, function(error, serviceWorkerFileContents) {
      if (error) {
        grunt.fail.warn(error);
      }
      fs.writeFile(path.join(rootDir, 'service-worker.js'), serviceWorkerFileContents, function(error) {
        if (error) {
          grunt.fail.warn(error);
        }
        done();
      });
    });
  });

  grunt.registerTask('server', function (target) {

    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'express:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'ngconstant',
      'express:livereload',
      'open',
      'watch'

    /*  'watch'*/
     /* 'watch',*/
   /*   'swPrecache'*/
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'ngconstant:test',
    'express:test',
    'karma',
    'protractor'
/*    'validate-package'*/
  ]);

  grunt.registerTask('build', [
/*
    'test',
*/
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'ngconstant',
    'concat',
    'preprocess:html',  // Remove DEBUG code from production builds
    'ngmin',
    //'ngAnnotate',
    'inline',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin',
    'swPrecache:dist'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('protractor-e2e', ['concurrent:protractor_test']);
  grunt.registerTask('protractor-chrome', ['protractor:run_chrome']);
  //grunt.registerTask('protractor-firefox', ['protractor:run_firefox']);

};
