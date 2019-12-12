const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the terser package we can require it:
const rename = require("gulp-rename"), eslint = require("gulp-eslint");

const sass = require("gulp-sass"), cssnano = require("gulp-cssnano");

const browserSync = require('browser-sync').create();

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const streamify = require('gulp-streamify');

const uglify = require('gulp-uglify-es').default;

// Watch scss AND html files, doing different things with each.
gulp.task('browser-sync', function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("sass", function () {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./build/css"));
});

gulp.task('scripts', function() {
  return browserify("./js/index.js")
      .transform("babelify", { presets: ["@babel/env"] })
      .bundle()
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('bundle.js'))
      //.pipe(streamify(terser()))
      .pipe(streamify(uglify()))
      .pipe(rename({ extname: ".min.js" }))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./build/js'));
});

gulp.task("reload", function (done) {
  browserSync.reload();
  done();
});

gulp.task("watch", function () {
  gulp.watch("js/**/*.js", gulp.series("lint", "scripts", "reload"));
  gulp.watch("sass/*.scss", gulp.series("sass", "reload"));
  gulp.watch("index.html", gulp.series("reload"));
});

gulp.task("lint", function () {
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("setup", gulp.series("scripts", "sass", "browser-sync"));

gulp.task("default", gulp.parallel("lint", "setup", "watch"));