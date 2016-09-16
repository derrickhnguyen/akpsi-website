var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var filesize = require('gulp-filesize');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');

var js = ['./public/javascripts/*.js'];
var contactJs = ['./public/javascripts/react/plain/contact.js'];
var recruitmentJs = ['./public/javascripts/react/plain/recruitment.js']
var css = ['./public/stylesheets/*.css'];

gulp.task('concatJS', function() {
	return gulp.src(js)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(filesize())
		.pipe(gulp.dest('./public/javascripts/min/'))
		.on('error', gutil.log);
});

gulp.task('concatCSS', function() {
	return gulp.src(css)
		.pipe(concat('vendor.css'))
		.pipe(cleanCSS())
		.pipe(filesize())
		.pipe(gulp.dest('./public/stylesheets/min/'));
})

gulp.task('concatContactJS', function() {
	return gulp.src(contactJs)
		.pipe(concat('contact.js'))
		.pipe(uglify())
		.pipe(filesize())
		.pipe(gulp.dest('./public/javascripts/react/min/'))
		.on('error', gutil.log);
})

gulp.task('concatRecruitmentJS', function() {
	return gulp.src(recruitmentJs)
		.pipe(concat('recruitment.js'))
		.pipe(uglify())
		.pipe(filesize())
		.pipe(gulp.dest('./public/javascripts/react/min/'))
		.on('error', gutil.log);
})

gulp.task('watch', function(cb) {
	gulp.watch(js, ['concatJS']);
	gulp.watch(css, ['concatCSS']);
});

gulp.task('default', ['concatJS', 'concatCSS', 'watch']);
