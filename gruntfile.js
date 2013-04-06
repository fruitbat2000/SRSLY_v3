module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //jshint config 
    jshint: {
      files: ['js/*.js, js/components/*.js'],
      options: {
        globals: {
          jQuery: true,
          console:true
        }
      }
    },

    //stylus config 
    stylus: {
      compile: {
        options: {
          compress:false,
          paths: ['css/css_stylus', 'css_stylus/**/']
        },
        files: {
          'css/index.css': 'css/css_stylus/index.styl'
        }
      }
    },

    //watch
    watch: {
      styles: {
        files: ['css/**/*.styl'],
        tasks: ['stylus']
      },
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['jshint']
      }

    }
  });

  //load modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //default task 
  grunt.registerTask('default', ['jshint', 'stylus']);

  //other tasks 
  grunt.registerTask('styles', 'stylus');
  grunt.registerTask('test', 'jshint');
};