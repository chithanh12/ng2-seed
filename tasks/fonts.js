module.exports = function(gulp,plugins, config){
    return function () {
        return gulp.src(['src/assets/fonts/*'],{base: config.source})
               .pipe(gulp.dest(config.output +'/assets/fonts/'));
    };
} 