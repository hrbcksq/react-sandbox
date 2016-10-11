var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel');

var consts = {
    source: './source',
    public: './public'
}

gulp.task('serve', ['babel', 'copy'], () => {
    browserSync.init({
        server: {
            baseDir: consts.public
        }
    });

    gulp.watch(`${consts.source}/**/*.jsx`, ['babel']);
    gulp.watch([
        `${consts.source}/**/*.js`,
        `${consts.source}/**/*.html`
    ], ['copy']);
    // gulp.watch(`${consts.source}/**/*.html`).on('change', browserSync.reload)
});

gulp.task('copy', () => {
    return gulp.src([
            `${consts.source}/**/*.js`,
            `${consts.source}/**/*.html`
        ])
        .pipe(gulp.dest(consts.public))
        .pipe(browserSync.stream());
})


gulp.task('babel', () => {
    return gulp.src(`${consts.source}/**/*.jsx`)
        .pipe(sourcemaps.init())
        .pipe(babel({
            plugins: ['transform-react-jsx']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(consts.public))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);