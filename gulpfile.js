'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});
var runSequence = require('run-sequence').use(gulp);
var config = require('./tasks/config.js')(plugins);

/* Load all tasks */
require('./tasks/loader').load([
    'clean', 
    'scripts', 
    'styles', 
    'themes', 
    'templates', 
    'images', 
    'assemblies',
    'serve',
    'fonts'
], gulp, plugins, config);

gulp.task('build', function () {
    runSequence('clean', ['scripts', 'styles', 'themes', 'templates', 'images', 'fonts'], 'assemblies');
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['scripts']);
    gulp.watch('src/**/*.css', ['styles']);
    gulp.watch('src/**/*.html', ['templates']);
});

gulp.task('default', ['build']);
