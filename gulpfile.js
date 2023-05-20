(function() {
	var gulp = require('gulp');
	var sass = require('gulp-sass');
	var autoprefixer = require('gulp-autoprefixer');
 
	gulp.task('sass', function () {
		return gulp
			.src('sass/*.scss')
			.pipe(sass({
				includePaths: ['./node_modules']
			}))
			.pipe(autoprefixer({
				browsers: ['last 2 version', '> 5%']
			}))
			.pipe(gulp.dest('public/css'));
	});
	
	gulp.task('default', ['scss']);
})();
