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

    //handlebars config
    handlebars: {
      compile: {
        options: {
          namespace: 'hbs',
          amd: true,
          processName: function(filename) {
            var pieces = filename.split("/");
            var filetype = pieces[pieces.length - 1].split('.');
            return filetype[0];
          },
        },
        files: {
          "js/templates/templates.js" : ["js/templates/*.html"]
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
      },
      templates: {
        files: ['js/templates/*.html'],
        tasks: ['handlebars']
      }
    },

    //concat
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/libs/modernizr.js', 'js/libs/jquery.scrollTo', 'js/templates/templates.js', 'js/dist/optimized.js'],
        dest: 'js/dist/dist.js'
      }
    },

    //requirejs
    requirejs: {
      compile:{
        options: {
          mainConfigFile: 'js/main.js',
          out: 'js/dist/optimized.js',
          name: 'main',
          uglify: {
            beautify: true
          }
        }
      }
    },

    //uglify
    uglify: {
      my_target: {
        files: {
          'js/dist/dist.js' : 'js/dist/dist.js'
        }
      }
    }
  });

  //load modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //default task 
  grunt.registerTask('default', ['jshint', 'handlebars', 'stylus']);

  //other tasks 
  grunt.registerTask('styles', 'stylus');
  grunt.registerTask('test', 'jshint');
  grunt.registerTask('compile', ['requirejs', 'concat', 'uglify']);
};