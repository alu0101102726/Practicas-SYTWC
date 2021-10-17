
const { series, parallel } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
	let files = [
		'html/*.html',
		'css/*.css',
		'js/*.js'
	];
	browserSync.init({
		server: { 
			baseDir: "html",
			index: "index.html"
		}
	});
});

gulp.task('browser-sync', function() {
	browserSync.init({
		ui: {
			port: 8088	
		},
		port: 8080,
		proxy: "10.6.128.23",
		open: false
	});
});

gulp.task('watch', function() {
	gulp.watch([
		'css/*.css',
		'html/*.html',
		'js/*.js'
	], ['browser-sync']);
});

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
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
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);

gulp.task('default', series('browser-sync', 'watch'));
