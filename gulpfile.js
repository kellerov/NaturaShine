const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const imagemin = require("gulp-imagemin");
const del = require("del");
const rename = require("gulp-rename");
const gulpStylelint = require("gulp-stylelint");
const prettier = require("gulp-prettier");
const eslint = require("gulp-eslint");
const prettierEslint = require("gulp-prettier-eslint");

gulp.task("eslint", function Eslint() {
  return gulp
    .src("src/js/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("prettierEslint", function PrettierEslint() {
  gulp.src("src/**/*.js").pipe(prettierEslint()).pipe(gulp.dest("./dist"));
});

function format() {
  return gulp
    .src("src/**/*.js")
    .pipe(prettier({ singleQuote: true }))
    .pipe(dest("dist"));
}

function validate() {
  return gulp.src("dist/**/*.js").pipe(prettier.check({ singleQuote: true }));
}

gulp.task("lint", function lintCssTask() {
  return gulp.src("src/scss/blocks/**/*.+(scss|sass)").pipe(
    gulpStylelint({
      reporters: [{ formatter: "string", console: true }],
    })
  );
});

// gulp.task("fix-css", function fixCssTask() {
//   return gulp
//     .src("src/scss/blocks/**/*.+(scss|sass)")
//     .pipe(
//       gulpStylelint({
//         fix: true,
//       })
//     )
//     .pipe(gulp.dest("src"));
// });

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "src",
    },
  });
});

gulp.task("style", function () {
  return (
    gulp
      .src("src/scss/blocks/**/*.+(scss|sass)")

      // .pipe(
      //   gulpStylelint({
      //     reporters: [{ formatter: "string", console: true }],
      //   })
      // )

      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(rename({ suffix: ".min", prefix: "" }))
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 version"],
          grid: true,
        })
      )
      .pipe(concat("style.min.css"))
      .pipe(cleanCSS({ compatibility: "ie10" }))
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream())
  );
});

gulp.task("script", function () {
  return gulp
    .src("node_modules/jquery/dist/jquery.js", "src/js/main.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

gulp.task("build", function () {
  return gulp
    .src(
      [
        "src/css/style.min.css",
        "src/fonts/**/*",
        "src/js/main.min.js",
        "src/*.html",
      ],
      { base: "src" }
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("images", function () {
  return gulp
    .src("src/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("dist/images"));
});

gulp.task("icons", function () {
  return gulp
    .src("src/icons/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("dist/icons"));
});

gulp.task("del", function () {
  return del.sync("dist");
});

gulp.task("watch", function () {
  gulp.watch("src/scss/blocks/**/*.+(scss|sass)", gulp.parallel("style"));
  gulp.watch("src/js/main.min.js)", gulp.parallel("script"));
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("watch", "server", "style", "script"));
