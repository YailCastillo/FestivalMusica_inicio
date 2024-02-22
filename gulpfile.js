const {src, dest, watch, parallel} = require("gulp");

//CSS
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

//Imagenes
const cache = require('gulp-cache');
const imagemin = require("gulp-imagemin");
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done) {
    //Identificar el archivo de sass
    src("src/scss/**/*.scss") //Identificar el archivo sass
        .pipe(plumber())
        .pipe(sass()) //compilarlo
        .pipe(dest("build/css")); //Guardar en disco duro
    
    done();
}

function images(done) {
    const options = {
        optimizationLevel: 3
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(options)))
        .pipe(dest('build/img'));
    
    done();
}

function versionWebp(done) {
    const options = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(options))
        .pipe(dest('build/img'));
    
    done();
}

function versionAvif(done) {
    const options = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(avif(options))
        .pipe(dest('build/img'));
    
    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css;
exports.images = images;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(images, versionWebp, versionAvif, dev);