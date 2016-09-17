const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const minify = require('gulp-minify-css');
const cached = require('gulp-cached');
const notify = require('gulp-notify');

gulp.task('mainJs', () => {
    return gulp.src('templates/jsx/main/main.js')
        .pipe(cached('main-converter'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('www/'))
        .pipe(notify('Done with the convertion: main.js'))
});