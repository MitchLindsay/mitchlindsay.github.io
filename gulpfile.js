var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('clean', shell.task(['bundle exec jekyll clean']));

gulp.task('build', shell.task(['bundle exec jekyll build']));

gulp.task('build-dev', shell.task(['bundle exec jekyll build --watch']));

gulp.task('doctor', shell.task(['bundle exec jekyll doctor']));

gulp.task('serve', function () {
  browserSync.init({server: {baseDir: 'static/'}});
  gulp.watch('static/**/*.*').on('change', browserSync.reload);
});

gulp.task('publish', ['clean', 'build'], function() {
  exec('rake publish');
});

gulp.task('default', ['clean', 'build-dev', 'serve']);
