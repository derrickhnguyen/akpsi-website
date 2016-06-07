var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var filesize = require('gulp-filesize');
var cleanCSS = require('gulp-clean-css');

gulp.task('concatJS', function() {
	return gulp.src('./public/javascripts/*.js')
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(filesize())
		.pipe(gulp.dest('./public/javascripts/min/'))
		.on('error', gutil.log)
});

gulp.task('concatCSS', function() {
	return gulp.src('./public/stylesheets/*.css')
		.pipe(concat('vendor.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./public/stylesheets/min/'))
})

gulp.task('default', ['concatJS', 'concatCSS']);
