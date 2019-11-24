const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the terser package we can require it:
const terser = require("gulp-terser"), rename = require("gulp-rename"), eslint = require("gulp-eslint");

const sass = require("gulp-sass"), cssnano = require("gulp-cssnano");

const browserSync = require('browser-sync').create();


// Save a reference to the `reload` method

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
  .pipe(gulp.dest("./build/css"))
  .pipe(cssnano())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("./build/css"));
});

gulp.task("scripts", function () {
      return gulp
        .src("./js/*.js") // What files do we want gulp to consume?
        .pipe(terser()) // Call the terser function on these files
        .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
        .pipe(gulp.dest("./build/js")); // Where do we put the result?
});

gulp.task("reload", function (done) {
    browserSync.reload();
    done();
});

gulp.task("watch", function() {
  gulp.watch("js/*.js", gulp.series("lint", "scripts", "reload"));
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

/* gulp.task("test", function (done) {
    console.log("Test!");
    done();
}); */

gulp.task("default", gulp.parallel("lint", "browser-sync", "watch"));