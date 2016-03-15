var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var gulp = require('gulp');
var shell = require('gulp-shell');
var svgmin = require('gulp-svgmin');

gulp.task('clean', shell.task(['bundle exec jekyll clean']));

gulp.task('build', shell.task(['bundle exec jekyll build']));

gulp.task('build-watch', shell.task(['bundle exec jekyll build --watch']));

gulp.task('doctor', shell.task(['bundle exec jekyll doctor']));

gulp.task('serve', function () {
  browserSync.init({server: {baseDir: 'static/'}});
  gulp.watch('static/**/*.*').on('change', browserSync.reload);
});

gulp.task('svgmin', function () {
  return gulp.src('_assets/images/icons/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulp.dest('_assets/images/icons'));
});

gulp.task('publish', ['clean', 'build'], function() {
  exec('rake publish');
});

gulp.task('default', ['clean', 'build-watch', 'serve']);
