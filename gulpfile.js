'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber'),
	prefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	rigger = require('gulp-rigger'),
	rimraf = require('rimraf'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;

var path = {
	build: {
		html: '',
		css: 'css/'
	},
	src: {
		html: 'src/html/[^_]*.html',
		style: 'src/scss/*.scss'
	},
	watch: {
		html: 'src/html/**/*.html',
		style: 'src/scss/**/*.scss'
	}
};

var config = {
	server: {
		baseDir: ""
	},
	tunnel: false,
	host: 'localhost',
	port: 9000,
	logPrefix: "Zzz"
};

gulp.task('webserver', function () {
	browserSync(config);
});

gulp.task('clean', function (cb) {
	rimraf('./*.html', cb);
	rimraf('./css/', cb);
});

gulp.task('html:build', function () {
	gulp.src(path.src.html)
		.pipe(plumber())
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
	gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(prefixer({
			browsers: [
				'Android 2.3',
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 8',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6'
			],
			cascade: false
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});

gulp.task('build', [
	'html:build',
	'style:build'
]);


gulp.task('watch', function(){
	watch([path.watch.html], function(event, cb) {
		gulp.start('html:build');
	});
	watch([path.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
});


gulp.task('default', ['build', 'webserver', 'watch']);