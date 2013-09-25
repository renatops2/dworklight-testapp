//-- References:
//-- https://github.com/yatskevich/grunt-bower-task
//-- https://github.com/sindresorhus/grunt-shell

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install : {
        options: {
          targetDir  : "apps/DWorklightApp/common/lib",
          install    : true,
          cleanup    : true,
          verbose    : false
        }
      }
    },

    shell : {
        runAnt: {                      // Target
            options: {                      // Options
                stdout: true
            },
            command: 'ant'
        }
    }

  });

  //-- Load up extensions
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-shell');

  //-- Default task(s).
//  grunt.registerTask('default', ['bower','shell']);

};
