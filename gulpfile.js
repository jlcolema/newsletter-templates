/*------------------------------
 Gulp
------------------------------*/

// Task runners to use for the new newsletter templates for Crosspoint Church.

/* Plugins
------------------------------*/

// Notes...

var gulp =		  require('gulp');
var inlinecss =   require('gulp-inline-css');
var imagemin =	  require('gulp-imagemin');
var browsersync = require('browser-sync');

/* Directories
------------------------------*/

// Notes...

var basePaths = {

	dev:	   'src/',
	dist:	   'dist/html/',
	new:	   'new/',
	originals: 'originals/',
	assets:	   'dist/html/assets/'

};

/* Inline CSS
------------------------------*/

// Notes...

gulp.task('inlinecss', function() {

	return gulp.src(basePaths.new + '*.html')
		.pipeline(inlinecss({
			applyStyleTags: true,
			applyLinkTags: true,
			removeStyleTags: true,
			removeLinkTags: true,
			preserveMediaQueries: true,
			applyWidthAttributes: true,
			applyTableAttributes: true
		}))
		.pipe(gulp.dest(basePaths.dist));

});

/* Images
------------------------------*/

// Notes...

gulp.task('img', function() {

	return gulp.src(basePaths.dev + 'img/**/*')

	.pipe(imagemin({

		optimizationLevel: 5,
		progressive: true,
		interlaced: true

	}))

	.pipe(gulp.dest(basePaths.assets + 'img'));

});

/* Fonts
------------------------------*/

// Notes...

gulp.task('fonts', function() {

	return gulp.src(basePaths.dev + 'fonts/**/*')

	.pipe(gulp.dest(basePaths.assets + 'fonts'));

});

/* Watch
------------------------------*/

// Notes...

gulp.task('watch', function() {

	browsersync.init({

		proxy: "https://newsletters.local",
		host: "newsletters.local",
		open: "external"

	});

	gulp.watch(basePaths.dev + 'img/**/*', gulp.series('img'));

	gulp.watch(basePaths.dev + 'fonts/**/*', gulp.series('fonts'));

	gulp.watch(basePaths.dist + '**/*.html').on('change', browsersync.reload);

});

/* Title
------------------------------*/

// Notes...

gulp.task('default', gulp.parallel('inlinecss', 'img', 'fonts', 'watch'));