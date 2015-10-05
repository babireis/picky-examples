
var Picky = require('picky');
var gulp = require('gulp');

gulp.task('test', function () {
    return gulp.src(Picky.glob, {
      read: false
    }).pipe(Picky({
      devices: 'nexus5',
      engine: {
        reporter: 'spec'
      }
    }));
});

gulp.task('test:ui', function () {
    return gulp.src(Picky.glob, {
      read: false
    }).pipe(Picky({
      ui: true,
      watch: true,
      engine: {
        reporter: 'spec'
      }
    }));
});

gulp.task('default', ['test']);
