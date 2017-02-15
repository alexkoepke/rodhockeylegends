module.exports = function(grunt) {

  // configure the tasks
  grunt.initConfig({
    //  Copy
    copy: {
      dist: { cwd: 'fonts', src: [ '**' ], dest: 'puck/static/puck/fonts', expand: true },
    },

    //  Jasmine
    jasmine: {
      components: {
        src: [
          'puck/static/puck/bin/materialize.js'
        ],
        options: {
          vendor: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
          ],
          styles: 'puck/static/puck/bin/materialize.css',
          specs: 'tests/spec/**/*Spec.js',
          helpers: 'tests/spec/helper.js',
          keepRunner : true,
          //helpers: 'test/spec/*.js'
        }
      }
    },



    //  Sass
    sass: {                              // Task
      expanded: {                            // Target
        options: {                       // Target options
          outputStyle: 'expanded',
          sourcemap: false,
        },
        files: {
          'puck/static/puck/css/materialize.css': 'puck/static/puck/sass/materialize.scss',
        }
      },

      min: {
        options: {
          outputStyle: 'compressed',
          sourcemap: false
        },
        files: {
          'puck/static/puck/css/materialize.min.css': 'puck/static/puck/sass/materialize.scss',
        }
      },

      // Compile bin css
      bin: {
        options: {
          outputStyle: 'expanded',
          sourcemap: false
        },
        files: {
          'puck/static/puck/bin/materialize.css': 'puck/static/puck/sass/materialize.scss',
        }
      }
    },

    // PostCss Autoprefixer
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: [
              'last 2 versions',
              'Chrome >= 30',
              'Firefox >= 30',
              'ie >= 10',
              'Safari >= 8']
          })
        ]
      },
      expended: {
        src: 'puck/static/puck/css/materialize.css'
      },
      min: {
        src: 'puck/static/puck/css/materialize.min.css'
      },
      bin: {
        src: 'puck/static/puck/bin/materialize.css'
      }
    },

    // Browser Sync integration
    browserSync: {
      bsFiles: ["puck/static/puck/bin/*.js", "puck/static/puck/bin/*.css", "!**/node_modules/**/*"],
      options: {
        server: {
          baseDir: "./" // make server from root dir
        },
        port: 8000,
        ui: {
          port: 8080,
          weinre: {
            port: 9090
          }
        },
        open: false
      }
    },

    //  Concat
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: [
          "puck/static/puck/js/initial.js",
          "puck/static/puck/js/jquery.easing.1.3.js",
          "puck/static/puck/js/animation.js",
          "puck/static/puck/js/velocity.min.js",
          "puck/static/puck/js/hammer.min.js",
          "puck/static/puck/js/jquery.hammer.js",
          "puck/static/puck/js/global.js",
          "puck/static/puck/js/collapsible.js",
          "puck/static/puck/js/dropdown.js",
          "puck/static/puck/js/modal.js",
          "puck/static/puck/js/materialbox.js",
          "puck/static/puck/js/parallax.js",
          "puck/static/puck/js/tabs.js",
          "puck/static/puck/js/tooltip.js",
          "puck/static/puck/js/waves.js",
          "puck/static/puck/js/toasts.js",
          "puck/static/puck/js/sideNav.js",
          "puck/static/puck/js/scrollspy.js",
          "puck/static/puck/js/forms.js",
          "puck/static/puck/js/slider.js",
          "puck/static/puck/js/cards.js",
          "puck/static/puck/js/chips.js",
          "puck/static/puck/js/pushpin.js",
          "puck/static/puck/js/buttons.js",
          "puck/static/puck/js/transitions.js",
          "puck/static/puck/js/scrollFire.js",
          "puck/static/puck/js/date_picker/picker.js",
          "puck/static/puck/js/date_picker/picker.date.js",
          "puck/static/puck/js/character_counter.js",
          "puck/static/puck/js/carousel.js",
          "puck/static/puck/js/tapTarget.js",
        ],
        // the location of the resulting JS file
        dest: 'puck/static/puck/js/materialize.js'
      },
      temp: {
        // the files to concatenate
        src: [
          "puck/static/puck/js/initial.js",
          "puck/static/puck/js/jquery.easing.1.3.js",
          "puck/static/puck/js/animation.js",
          "puck/static/puck/js/velocity.min.js",
          "puck/static/puck/js/hammer.min.js",
          "puck/static/puck/js/jquery.hammer.js",
          "puck/static/puck/js/global.js",
          "puck/static/puck/js/collapsible.js",
          "puck/static/puck/js/dropdown.js",
          "puck/static/puck/js/modal.js",
          "puck/static/puck/js/materialbox.js",
          "puck/static/puck/js/parallax.js",
          "puck/static/puck/js/tabs.js",
          "puck/static/puck/js/tooltip.js",
          "puck/static/puck/js/waves.js",
          "puck/static/puck/js/toasts.js",
          "puck/static/puck/js/sideNav.js",
          "puck/static/puck/js/scrollspy.js",
          "puck/static/puck/js/forms.js",
          "puck/static/puck/js/slider.js",
          "puck/static/puck/js/cards.js",
          "puck/static/puck/js/chips.js",
          "puck/static/puck/js/pushpin.js",
          "puck/static/puck/js/buttons.js",
          "puck/static/puck/js/transitions.js",
          "puck/static/puck/js/scrollFire.js",
          "puck/static/puck/js/date_picker/picker.js",
          "puck/static/puck/js/date_picker/picker.date.js",
          "puck/static/puck/js/character_counter.js",
          "puck/static/puck/js/carousel.js",
          "puck/static/puck/js/tapTarget.js",
        ],
        // the location of the resulting JS file
        dest: 'puck/static/puck/temp/js/materialize.js'
      },
    },

    //  Uglify
    uglify: {
      options: {
        // Use these options when debugging
        // mangle: false,
        // compress: false,
        // beautify: true

      },
      dist: {
        files: {
          'puck/static/puck/js/materialize.min.js': ['puck/static/puck/js/materialize.js']
        }
      },
      bin: {
        files: {
          'puck/static/puck/bin/materialize.js': ['puck/static/puck/temp/js/materialize.js']
        }
      },
      extras: {
        files: {
          'puck/static/puck/extras/noUiSlider/nouislider.min.js': ['puck/static/puck/extras/noUiSlider/nouislider.js']
        }
      }
    },

    //  Clean
    clean: {
      temp: {
        src: [ 'puck/static/puck/temp/' ]
      },
    },

    //  Watch Files
    watch: {

      js: {
        files: [ "puck/static/puck/js/**/*", "!puck/static/puck/js/init.js"],
        tasks: ['js_compile'],
        options: {
          interrupt: false,
          spawn: false,
        },
      },

      sass: {
        files: ['puck/static/puck/sass/**/*'],
        tasks: ['sass_compile'],
        options: {
          interrupt: false,
          spawn: false,
        },
      }
    },


    //  Concurrent
    concurrent: {
      options: {
        logConcurrentOutput: true,
        limit: 10,
      },
      monitor: {
        tasks: ["watch:js", "watch:sass", "notify:watching", 'server']
      },
    },


    //  Notifications
    notify: {
      watching: {
        options: {
          enabled: true,
          message: 'Watching Files :)',
          title: "Materialize", // defaults to the name in package.json, or will use project directory's name
          success: true, // whether successful grunt executions should be notified automatically
          duration: 1 // the duration of notification in seconds, for `notify-send only
        }
      },

      sass_compile: {
        options: {
          enabled: true,
          message: 'Sass Compiled!',
          title: "Materialize",
          success: true,
          duration: 1
        }
      },

      js_compile: {
        options: {
          enabled: true,
          message: 'JS Compiled!',
          title: "Materialize",
          success: true,
          duration: 1
        }
      },



      server: {
        options: {
          enabled: true,
          message: 'Server Running!',
          title: "Materialize",
          success: true,
          duration: 1
        }
      }
    },

    // Text Replace
    replace: {
      version: { // Does not edit README.md
        src: [
          'package.json',
        ],
        overwrite: true,
        replacements: [{
          from: grunt.option( "oldver" ),
          to: grunt.option( "newver" )
        }]
      },
      readme: { // Changes README.md
        src: [
          'puck/static/puck/README.md'
        ],
        overwrite: true,
        replacements: [{
          from: 'Current Version : v'+grunt.option( "oldver" ),
          to: 'Current Version : v'+grunt.option( "newver" )
        }]
      },
    },

    // Create Version Header for files
    usebanner: {
      release: {
        options: {
          position: 'top',
          banner: "/*!\n * Materialize v"+ grunt.option( "newver" ) +" (http://materializecss.com)\n * Copyright 2014-2015 Materialize\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\n */",
          linebreak: true
        },
        files: {
          src: [ 'puck/static/puck/css/*.css', 'puck/static/puck/js/*.js']
        }
      }
    },

    // Removes console logs
    removelogging: {
      source: {
        src: ["puck/static/puck/js/**/*.js", "!puck/static/puck/js/velocity.min.js"],
        options: {
          // see below for options. this is optional.
        }
      }
    },
  });

  // load the tasks
  // grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-remove-logging');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-postcss');
  // define the tasks
  grunt.registerTask(
    'release',[
      'lint',
      'copy',
      'sass:expanded',
      'sass:min',
      'postcss:expended',
      'postcss:min',
      'concat:dist',
      'uglify:dist',
      'uglify:extras',
      'usebanner:release',
      'compress:main',
      'compress:src',
      'compress:starter_template',
      'compress:parallax_template',
      'replace:version',
      'replace:readme',
      'rename:rename_src',
      'rename:rename_compiled'
    ]
  );

  grunt.registerTask('jade_compile', ['jade', 'notify:jade_compile']);
  grunt.registerTask('js_compile', ['concat:temp', 'uglify:bin', 'notify:js_compile', 'clean:temp']);
  grunt.registerTask('sass_compile', ['sass:bin', 'postcss:bin', 'notify:sass_compile']);
  grunt.registerTask('server', ['browserSync', 'notify:server']);
  grunt.registerTask('lint', ['removelogging:source']);
  grunt.registerTask('monitor', ["concurrent:monitor"]);
  grunt.registerTask('travis', ['jasmine']);
};
