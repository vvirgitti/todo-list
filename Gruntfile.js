module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/spec/*Spec.js',
        helpers: 'spec/spec/*Helper/js',
      }
    },

    protractor: {
    options: {
      configFile: "conf.js",
      keepAlive: true,
      noColor: false,
      args: {

      }
    },
    your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
      options: {
        configFile: "conf.js", // Target-specific config file
        args: {} // Target-specific arguments
      }
    },
  },

  protractor_webdriver: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        command: 'webdriver-manager start',// Target-specific file lists and/or options go here.
      },
    },
    express: {
      options: {
        port: 3000,
        debug: true
      },
      server: {
        options: {
          script: 'server.js'
        }
      }
      },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'protractor']);
  grunt.registerTask('test', ['jasmine', 'protractor','jshint']);
  grunt.registerTask('run', ['test', 'watch']);

};
