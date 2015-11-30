var gulp = require('gulp');
var config = require('../config').markup;
var $ = require('gulp-load-plugins')();
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');

gulp.task('bootstrap-css', function() {
  return gulp.src('./node_modules/bootstrap/dist/css/*.css')
    .pipe(gulp.dest(config.dest +'/assets/css'))
    .on('error', $.util.log.bind($.util, 'Error copying bootstrap css'));
});

gulp.task('sassify', function() {
  return sass(config.src + '/assets/stylesheets/customizations.scss', {noCache: true, style: 'compressed'})
    .on('error', $.util.log.bind($.util, 'Sass Error'))
    .pipe(rename('customizations.css'))
    .pipe(gulp.dest(config.dest + '/assets/css'));
});

gulp.task('images', function() {
  return gulp.src(config.src + '/assets/images/*.*')
    .pipe(gulp.dest(config.dest))
    .on('error', $.util.log.bind($.util, 'Error copying images'));
});

gulp.task('markup', function() {
  return gulp.src(config.src + '/*.html')
    .pipe(gulp.dest(config.dest))
    .on('error', $.util.log.bind($.util, 'Error copying html'));
});
