module.exports = function(grunt) {

  // Plugin configuration
  grunt.initConfig({
    jshint: {
      all: {
        src: ['../**/*.js', '!../dist/app.js', '!../lib/node_modules/**/*', '!../lib/bower_components/**/*'],
        options: {
          jshintrc: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['../**/*.js', '!./dist/app.js','!./lib/node_modules/**/*', '!./lib/bower_components/**/*'],
        tasks: ['jshint']
      },
      json: {
        files: ['../**/*.json', '!./lib/node_modules/**/*', '!./lib/bower_components/**/*'],
        tasks: ['jsonlint']
      },
      sass: {
        files: ['../**/*.scss', '!./lib/node_modules/**/*', '!./lib/bower_components/**/*'],
        tasks: ['sass']
      }
    },
    jsonlint: {
      all: {
        src: ['../**/*.json', '!./lib/node_modules/**/*', '!./lib/bower_components/**/*'],
        options: {
          format: true,
          indent: 2
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          '../dist/main.css': '../src/sass/main.scss'
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass','watch']);
};
