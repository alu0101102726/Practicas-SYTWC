
const { series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function browsersync() {
	let files = [
		'html/*.html',
		'scss/*.scss',
		'js/*.js'
	];
	browserSync.init({
		server: {
			baseDir: "html",
			index: "index.html"
		},
		ui: {
			port: 8088	
		},
		port: 8080,
		host: "10.6.128.23",
		open: false
	});
}

function watch() {
	gulp.watch('scss/*.scss', (done) => {
		cssTranspile(done);
	});
}

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  return gulp.src('scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css/'));
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

exports.build = series(
  clean,
  watch
  //parallel(cssMinify, jsMinify),
  //publish
);

exports.publish = browsersync;
