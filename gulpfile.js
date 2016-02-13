var 	gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer');
		watch = require('gulp-watch'),
		cmq = require('gulp-combine-media-queries');


gulp.task('style', function(){
	return gulp.src('./scss/style.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['> 0%'],
			cascade: false
		}))
		.pipe(cmq({ log : true }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['style']);
});

gulp.task('default', ['style', 'watch']);