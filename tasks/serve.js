var browserSync = require('browser-sync');

module.exports = function(gulp, plugins, config) {
    return function() {
        browserSync({
            port: config.port,
            server: {
                baseDir: config.output,
                middleware: [require('connect-history-api-fallback')()]
            }
        });

        gulp.watch([
            config.output + "/**/*.js",
            config.output + "/**/*.html",
            config.output + "/**/*.css"
        ], browserSync.reload, function () {
        });
    };
};