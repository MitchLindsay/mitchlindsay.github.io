var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('clean', shell.task([
  'rm -rf ./static/',
  'rm -rf ./source/_assets/vendor/',
  'rm -rf ./source/.asset-cache/',
  'bundle exec jekyll clean'])
);

gulp.task('copy', function() {
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./source/_assets/vendor/'));
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./source/_assets/vendor/'));
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./source/_assets/vendor/'));
});

gulp.task('build-prod', shell.task(['JEKYLL_ENV=production bundle exec jekyll build']));
gulp.task('build-dev', shell.task(['JEKYLL_ENV=development bundle exec jekyll build --watch']));
gulp.task('doctor', shell.task(['bundle exec jekyll doctor']));

gulp.task('serve', function () {
  browserSync.init({ server: { baseDir: './static/' } });
  gulp.watch('static/**/*.*').on('change', browserSync.reload);
});

/* Use this for production builds */
gulp.task('publish', ['clean', 'copy', 'build-prod'], function() { exec('rake publish'); });
/* Use this for development builds & testing */
gulp.task('default', ['clean', 'copy', 'build-dev', 'serve']);
