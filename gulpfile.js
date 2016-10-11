var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    react = require('gulp-react');

var consts = {
    source: './source',
    public: './public'
}

gulp.task('serve', ['react'], () => {
    browserSync.init({
        server: {
            baseDir: consts.source
        }
    });

    gulp.watch(`${consts.source}/**/*.jsx`, ['react']);
    gulp.watch(`${consts.source}/**/*.html`).on('change', browserSync.reload)
});


gulp.task('react', () => {
    return gulp.src(`${consts.source}/**/*.jsx`)
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(consts.public))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);