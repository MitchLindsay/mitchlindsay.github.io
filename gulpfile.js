var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('clean', shell.task([
  'rm -rf ./static/',
  'rm -rf ./source/.asset-cache/',
  'bundle exec jekyll clean'
]));

gulp.task('copy', function() {
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./source/_assets/js/'))
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./source/_assets/js/'))
});

gulp.task('build-prod', shell.task(['JEKYLL_ENV=production bundle exec jekyll build']));
gulp.task('build-dev', shell.task(['JEKYLL_ENV=development bundle exec jekyll build --watch']));
gulp.task('doctor', shell.task(['bundle exec jekyll doctor']));

gulp.task('serve', function () {
  browserSync.init({ server: { baseDir: './static/' } });
  gulp.watch('static/**/*.*').on('change', browserSync.reload);
});

gulp.task('publish', ['clean', 'build-prod'], function() { exec('rake publish'); });
gulp.task('default', ['clean', 'build-dev', 'serve']);
