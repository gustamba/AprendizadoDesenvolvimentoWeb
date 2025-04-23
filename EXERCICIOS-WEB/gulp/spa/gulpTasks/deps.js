const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const concat = require('gulp-concat')

function depsCSS(cb) {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglyfycss({ "ugglyComments": false }))
        .pipe()
}

function depsFonts(cb) {

    return cb()
}

module.exports = {
    depsCSS,
    depsFonts
}