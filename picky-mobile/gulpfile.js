
var Picky = require('picky');
var Gulp = require('gulp');

Gulp.task('test', function() {
  return Picky({
    devices: 'nexus5',
    reporter: 'picky'
  });
});

// OR

// Gulp.task('test', function(done) {
//   Picky({
//     devices: 'nexus5',
//     reporter: 'picky'
//   }, done);
// });

Gulp.task('default', ['test']);
