
module.exports = function(Grunt) {

  Grunt.initConfig({

    'picky': {
      options: {
        reporter: 'picky'
      }
    }

  });

  Grunt.loadNpmTasks('picky');

  Grunt.registerTask('test', ['picky']);
  Grunt.registerTask('default', ['test']);

}
