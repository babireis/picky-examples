
var Picky = require('picky');
var Gulp = require('gulp');

Gulp.task('test', function(done) {
  Picky({
    devices: 'nexus5',
    reporter: 'picky'
  }, done);
});

Gulp.task('default', ['test']);
