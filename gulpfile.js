const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
let isProd = false;

gulp.task('scripts', function() {
  return gulp.src('modules/*.js')
  .pipe(concat('script.js'))
  .pipe(gulpif(isProd , uglify()))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('modules/**/*.js', gulp.series('scripts'));
});

gulp.task('build', gulp.series('scripts'));
gulp.task('dev', gulp.series('build', gulp.parallel('watch')));
