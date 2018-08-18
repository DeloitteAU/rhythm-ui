const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('clean', () => {
	return del([
		'lib/**/*',
	]);
});

gulp.task('build:js', () => {
	return gulp.src(['src/**/*.@(js|jsx)', '!src/**/*.spec.js'], {base: 'src'})
		.pipe(babel())
		.pipe(gulp.dest('lib'));
});

gulp.task('build:scss', () => {
	return gulp.src('src/**/*.scss', {base: 'src'})
		.pipe(gulp.dest('lib'));
});

gulp.task('build', callback => {
	runSequence('clean', 'build:js', 'build:scss', callback);
});
