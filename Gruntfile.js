
module.exports = function (grunt) {

  grunt.initConfig({

    'picky': {
      options: {
        reporter: 'spec'
      },
      src: './test/**/*@(\.feature|\.test\.js)'
    }

  });

  grunt.loadNpmTasks('picky');

  grunt.registerTask('test', ['picky']);
  grunt.registerTask('default', ['test']);

}
