const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const gutil = require('gulp-util')
const babel = require('gulp-babel')

gulp.task('sass', function() {
  gulp.src('./styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./styles'))
})

gulp.task('js', function() {
  gulp.src('./js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./js'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()) })
    .pipe(gulp.dest('./js/output'))
})

gulp.task('watch', function() {
  gulp.watch('./styles/sass/**/*.scss', ['sass'])
})
