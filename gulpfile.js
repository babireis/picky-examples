
var Picky = require('picky');
var gulp = require('gulp');

gulp.task('test', function () {
    return gulp.src('test/**/*.@(test.js|feature)', {
      read: false
    }).pipe(Picky({  // or Picky.gulp
      reporter: 'spec'
    }));
});

gulp.task('default', ['test']);
