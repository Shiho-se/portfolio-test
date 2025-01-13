const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const mmq = require("gulp-merge-media-queries");

//以下続けてコンパイルの処理を書く
function compileSass() {
	return gulp.src("./src/assets/sass/**/*.scss")
	//パイプで繋いでコンパイルする
	.pipe(sass())
	.pipe(postcss([autoprefixer(), cssSorter()]))
	.pipe(mmq())
	//パイプで繋いでgulp.destで出力する
	.pipe(gulp.dest("./public/assets/css/"))
}

//監視する
function watch() {
//sassファイルが変更されたら、コンパイルを実行する
	gulp.watch("./src/assets/sass/**/*.scss", compileSass);
}

exports.default = watch;