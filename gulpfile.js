var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var browserSync = require("browser-sync").create();
var { logError } = require('gulp-sass');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var order = require("gulp-order");

function taskJS() {
    return gulp.src('./assets/js/*/*.js')
    .pipe(order([
        "db/database.js",
        "models/*.js",
        "views/*.js",
        "controllers/controllerInicial.js",
        "controllers/controllerLogin.js",
        "controllers/controllerRegistrar.js",
        "controllers/controllerTodo.js",
        "controllers/utils.js",
        "controllers/controllersInit.js",
    ]))
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(concat('app.min.js'))
    // .pipe(rename("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'))
    .pipe(browserSync.stream())
}

//Compila scss em css
function style() {

    //Local do scss
    return gulp.src('./assets/scss/app.scss')
    //Compilar Sass
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass,logError))
    //Destino
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
}

//Watch for changes
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./assets/scss/*.scss', style);
    gulp.watch('./assets/js/*/*.js', taskJS);
}

exports.style = style;
exports.watch = watch;