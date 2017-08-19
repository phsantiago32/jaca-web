var gulp = require('gulp')
    , historyApiFallback = require('connect-history-api-fallback')
    , browserSync = require('browser-sync').create();


gulp.task('server', function () {

    browserSync.instance = browserSync.init({
        startPath: '/index.html',
        server: {
            baseDir: "./",
            middleware: [
              historyApiFallback()
            ]
        },
        port: 8080,
        logPrefix: "Jaca Web"
    });

    gulp.watch("index.html").on("change", browser-syncrSync.reload);
    gulp.watch("app/**/*.js").on("change", browser-syncrSync.reload);
    gulp.watch("views/**/*.html").on("change", browser-syncrSync.reload);

});