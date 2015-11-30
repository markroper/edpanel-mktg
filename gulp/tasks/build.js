var gulp = require('gulp');

gulp.task('build', ['browserify', 'markup', 'bootstrap-css', 'sassify', 'images']);
