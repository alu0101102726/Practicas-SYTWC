
const { series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function watch() {
	gulp.watch('scss/*.scss', (done) => {
		cssTranspile(done);
	});
}

function browsersync() {
	let files = [
		'html/*.html',
		'scss/*.scss',
		'src/scripts/*.js'
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
    gulp.watch(files[1]).on('change', watch);
}

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  return gulp.src('scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('src/styles/'));
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function sourcemaps(cb) {
  gulp.src('src/scripts/*.js')
  .pipe(sourcemaps.init())
	.pipe(plugin1())
	.pipe(plugin2())
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('dist'));
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

exports.build = series(
  clean,
  parallel(browsersync, watch)
);
