var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('assets/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('assets/*.scss', ['sass']);
});
