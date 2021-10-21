
const { series, parallel } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function browsersync() {
	let files = [
		'html/*.html'
	];
	browserSync.init({
		server: {
			baseDir: "./",
			index: "html/index.html"
		},
		ui: {
			port: 8088	
		},
		port: 8080,
		host: "10.6.128.23",
		open: false
	});    
    gulp.watch(files).on('change', browserSync.reload);
}

function clean(cb) {
  // body omitted
  cb();
}

exports.build = series(
  clean,
  browsersync
);
