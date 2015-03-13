
module.exports = function (grunt) {

  grunt.initConfig({

    'picky': {

      'test': {
        options: {
          reporter: 'spec'
        },
        src: 'test/**/*.@(test|feature|library|dictionay|steps)?(.js)'
      },

      'ui': {
        options: {
          ui: true,
          reporter: 'spec'
        },
        src: 'test/**/*.@(test|feature|library|dictionay|steps)?(.js)'
      }

    }

  });

  grunt.loadNpmTasks('picky');

  grunt.registerTask('test', ['picky:test']);
  grunt.registerTask('test:ui', ['picky:test:ui']);
  grunt.registerTask('default', ['test']);

}
