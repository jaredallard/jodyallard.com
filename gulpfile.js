// gulp file

'use strict';

const gulp      = require('gulp');
const cleanCSS  = require('gulp-clean-css');
const uglify    = require('gulp-uglify');

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compress', 'minify-css']);
