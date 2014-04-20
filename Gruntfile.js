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
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  try {
    yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
  } catch (e) {}

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/{,*/}*.coffee'],
        tasks: ['coffee:test']
      }
//      livereload: {
//        options: {
//          livereload: LIVERELOAD_PORT
//        },
//        files: [
//          '<%= yeoman.app %>/{,*/}*.html',
//          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
//          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
//          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
//        ]
//      }
    },
//    express: {
//      options: {
//        port: 9000,
//        // Change this to '0.0.0.0' to access the server from outside.
//        hostname: 'localhost'
//      },
//      livereload: {
//        options: {
//          middleware: function (express) {
//            return [
//              lrSnippet,
//              mountFolder(express, '.tmp'),
//              mountFolder(express, yeomanConfig.app)
//            ];
//          }
//        }
//      },
//      test: {
//        options: {
//          middleware: function (express) {
//            return [
//              mountFolder(express, '.tmp'),
//              mountFolder(express, 'test')
//            ];
//          }
//        }
//      },
//      dist: {
//        options: {
//          middleware: function (express) {
//            return [
//              mountFolder(express, yeomanConfig.dist)
//            ];
//          }
//        }
//      }
//    },
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
          bases: [path.resolve('./.tmp'), path.resolve(__dirname, yeomanConfig.app)]
        }
      },
      test: {
        options: {
          server: path.resolve('./server.js'),
          bases: [path.resolve('./.tmp'), path.resolve(__dirname, 'test')]
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
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
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
        '!<%= yeoman.app %>/**/scripts/config/constants.js', // ignore auto generated constants file'
      ],
      test: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['test/spec/{,*/}*.js', '!test/spec/config/constants.js']
      }
    },
   /* coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '{,*//*}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*//*}*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },*/
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
     dist: {}
     },*/
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

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      // By default, your `index.html` <!-- Usemin Block --> will take care of
      // minification. This option is pre-configured if you do not wish to use
      // Usemin blocks.
      // dist: {
      //   files: {
      //     '<%= yeoman.dist %>/styles/main.css': [
      //       '.tmp/styles/{,*/}*.css',
      //       '<%= yeoman.app %>/styles/{,*/}*.css'
      //     ]
      //   }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
           // https://github.com/yeoman/grunt-usemin/issues/44
           //collapseWhitespace: true,
           collapseBooleanAttributes: true,
           removeAttributeQuotes: true,
           removeRedundantAttributes: true,
           useShortDoctype: true,
           removeEmptyAttributes: true,
           removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
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
              '*.html',
              'views/{,*/}*.html',
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
            ROUTES: grunt.file.readJSON('app/scripts/config/routes.json'),
            LINKS: grunt.file.readJSON('app/scripts/config/navigation.json'),
            SLIDER: grunt.file.readJSON('app/scripts/config/slider.json'),
            CONFIG: grunt.file.readJSON('app/scripts/config/config.json'),
            WORK: grunt.file.readJSON('app/scripts/config/work_pages.json'),
            PROJECTS: grunt.file.readJSON('app/scripts/config/projects_pages.json')
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
        'sass:dist'
        /*     'imagemin',
         'svgmin'*/
      ]
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
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    }
   /* uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ]
        }
      }
    }*/
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
    'express:test',
    'karma'
  ]);

  grunt.registerTask('build', [

    'clean:dist',
    'bower-install',
    'useminPrepare',
    'concurrent:dist',
    'imagemin',
    'svgmin',
    /*
     'autoprefixer',
     */
    'ngconstant',
    'concat',
    'ngmin',
    'copy:dist',
 /*   'cdnify',*/
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin'

   /* 'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'copy',
    'cdnify',
    'ngmin',
    'cssmin',
    'uglify',
    'rev',
    'usemin'*/
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};