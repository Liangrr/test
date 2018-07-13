var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('main.css'))
      .pipe(gulp.dest('css'))
  });

gulp.task('ab',function(){
	console.log('asdsad')
})

