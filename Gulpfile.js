var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var port = process.env.port || 1337;


gulp.task('browserify', function() {
    gulp.src('./app/src/js/main.js')
        .pipe(browserify({
            transform: 'reactify'
        }))
        .pipe(gulp.dest('./app/build/js/'));
});

gulp.task('open', function() {
    var options = {
        url: 'http://localhost:' + port,
        app: 'google chrome'
    }
    gulp.src('./app.index.html')
        .pipe(open('', options))
});

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        port: port,
        livereload: true
    });
});

gulp.task('less', function() {
    gulp.src('./app/src/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./app/build/css'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('./app/index.html')
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./app/src/**/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./app/src/less/style.less', ['less']);
    gulp.watch('./app/src/js/**/*.js', ['browserify','js']);
    gulp.watch('./app/*.html', ['html']);
});

gulp.task('serve', ['browserify', 'less', 'connect', 'open', 'watch'])

gulp.task('default', ['browserify']);
