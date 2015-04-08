var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var karma = require('gulp-karma');
var testFiles = [
    'release/js/**/*.js',
    'tests/**/*.js'
];
gulp.task('compile-typescript', function () {
    var tsProject = ts.createProject({
        declarationFiles: true,
        noExternalResolve: true
    });
    var tsResult = gulp.src('src/**/*.ts').pipe(ts(tsProject));
    return merge([
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});
gulp.task('test', ['compile-typescript'], function () {
    // Be sure to return the stream 
    return gulp.src(testFiles).pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
    })).on('error', function (err) {
        throw err;
    });
});
gulp.task('watch', ['test'], function () {
    var paths = [
        "karma.conf.ts",
        "src/**/*.ts",
        "tests/**/*.ts",
        "typings/**/*.ts"
    ];
    gulp.watch(paths, ['test']);
});
gulp.task('default', ['test'], function () {
    // gulp.src(testFiles)
    // 	.pipe(karma({
    // 		configFile: 'karma.conf.js',
    // 		action: 'watch'
    // 	}));
});
//# sourceMappingURL=gulpfile.js.map