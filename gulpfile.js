const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile sass into css
function style() {
    // 1. where is my sass file
    return gulp.src('./scss/**/*.scss')
    // 2. pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError)) 
    // 3. where do I save the compiled CS??
    .pipe(gulp.dest('./css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}   

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        online: true,
        tunnel: "test",
        logLevel: "debug"
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

