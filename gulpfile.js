var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var gulp = require('gulp');
var path = require('path');
var shell = require('gulp-shell');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');

gulp.task('clean', shell.task(['bundle exec jekyll clean']));

gulp.task('build', shell.task(['bundle exec jekyll build']));

gulp.task('build-watch', shell.task(['bundle exec jekyll build --watch']));

gulp.task('doctor', shell.task(['bundle exec jekyll doctor']));

gulp.task('serve', function () {
  browserSync.init({server: {baseDir: 'static/'}});
  gulp.watch('static/**/*.*').on('change', browserSync.reload);
});

gulp.task('svgstore', function () {
  return gulp
    .src('source/_assets/images/map/*.svg')
    .pipe(svgmin(function (file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      }
    }))
    .pipe(svgstore())
    .pipe(gulp.dest('source/_assets/images/icons'));
});

gulp.task('publish', ['clean', 'build'], function() {
  exec('rake publish');
});

gulp.task('default', ['clean', 'build-watch', 'serve']);
