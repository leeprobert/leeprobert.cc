module.exports = function(grunt) {

  grunt.initConfig({
      sass: {                              // Task 
        dist: {                            // Target 
          options: {                       // Target options 
            style: 'expanded'
          },
          files: [{
            expand: true,
            cwd: 'styles',
            src: ['*.scss'],
            dest: 'public/stylesheets/',
            ext: '.css'
          }]
        }
      }
    });
 
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);


};