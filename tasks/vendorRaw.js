module.exports =  function(gulp, plugins, config) {
    return function() {
        return gulp.src(config.allVendorJavascript)
            .pipe(gulp.dest(config.output));
    };
};