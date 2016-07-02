var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('clean', function() {
  shell.task(['rm -rf static/']);
  shell.task(['rm -rf source/.asset-cache']);
  shell.task(['bundle exec jekyll clean']);
});

gulp.task('build-prod', shell.task(['JEKYLL_ENV=production bundle exec jekyll build']));

gulp.task('build-dev', shell.task(['JEKYLL_ENV=development bundle exec jekyll build --watch']));

gulp.task('doctor', shell.task(['bundle exec jekyll doctor']));

gulp.task('serve', function () {
  browserSync.init({server: {baseDir: 'static/'}});
  gulp.watch('static/**/*.*').on('change', browserSync.reload);
});

/* Use this for production builds */
gulp.task('publish', ['clean', 'build-prod'], function() {
  exec('rake publish');
});

/* Use this for development builds & testing */
gulp.task('default', ['clean', 'build-dev', 'serve']);
