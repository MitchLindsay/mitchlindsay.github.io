var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('clean', shell.task(['bundle exec jekyll clean']));

gulp.task('build', shell.task(['bundle exec jekyll build --watch']));

gulp.task('doctor', shell.task(['bundle exec jekyll doctor']));

gulp.task('serve', function () {
    browserSync.init({server: {baseDir: 'static/'}});
    gulp.watch('static/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['clean', 'build', 'serve']);
