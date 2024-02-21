const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
    //Identificar el archivo de sass
    src("src/scss/**/*.scss") //Identificar el archivo sass
        .pipe(plumber())
        .pipe(sass()) //compilarlo
        .pipe(dest("build/css")); //Guardar en disco duro
    
    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css;
exports.dev = dev;