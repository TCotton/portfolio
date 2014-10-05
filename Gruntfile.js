// Generated on 2013-07-31 using generator-angular 0.3.1
'use strict';

// no more needed, see grunt-express doc
//var LIVERELOAD_PORT = 35729;
//var lrSnippet = require('express-livereload')({ port: LIVERELOAD_PORT });
//var mountFolder = function (express, dir) {
//  return express.static(require('path').resolve(dir));
//};

var path = require('path');

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
    watch: {
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js',  '<%= yeoman.app %>/footer/*.js', '<%= yeoman.app %>/homepage/*.js'],
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
        ignorePath: /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
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
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '<%= yeoman.app %>/footer/{,*/}*.js',
        '<%= yeoman.app %>/homepage/{,*/}*.js',
        //'<%= yeoman.server %>/**/*.js',
        '!<%= yeoman.app %>/**/scripts/config/constants.js', // ignore auto generated constants file'
      ],
      test: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['test/spec/{,*/}*.js', '!test/spec/config/constants.js']
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
      html: ['<%= yeoman.dist %>/{,*/}*.html', '<%= yeoman.dist %>/footer/*.html', '<%= yeoman.dist %>/homepage/*.html'],
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
        dest: ['<%= yeoman.dist %>/']
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
            src: ['*.html', 'views/{,*/}*.html', 'footer/*.html', 'homepage/*.html'],
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
              '.htaccess',
              'views/{,*/}*.html',
              'footer/*.html',
              'homepage/*.html',
              'components/**/*',
              'images/{,*/}*.{webp}',
              'fonts/*'
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
          dest: '<%= yeoman.app %>/scripts/config/constants.js',
          constants: {
            SLIDER: grunt.file.readJSON('app/scripts/config/slider.json'),
            CONFIG: grunt.file.readJSON('app/scripts/config/config.json'),
            WORK: grunt.file.readJSON('app/scripts/config/work_pages.json'),
            PROJECTS: grunt.file.readJSON('app/scripts/config/projects_pages.json'),
            STATS: grunt.file.readJSON('app/scripts/config/front_page_stats.json')
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
      },
      run_firefox: {
        configFile: 'e2e.conf.js', // Default config file
        options: {
          args: {
            browser: 'firefox'
          }
        }
      }
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
    }

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
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'ngconstant:test',
    'express:test',
    'karma',
    'protractor'
    //'validate-package'
  ]);

  grunt.registerTask('build', [
    'test',
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'ngconstant',
    'concat',
    'ngmin',
    //'ngAnnotate',
    'inline',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('protractor-e2e', ['concurrent:protractor_test']);
  grunt.registerTask('protractor-chrome', ['protractor:run_chrome']);
  grunt.registerTask('protractor-firefox', ['protractor:run_firefox']);

};