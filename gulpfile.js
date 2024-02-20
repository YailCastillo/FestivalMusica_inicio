const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {
    //Identificar el archivo de sass
    src("src/scss/app.scss") //Identificar el archivo sass
        .pipe(sass()) //compilarlo
        .pipe(dest("build/css")); //Guardar en disco duro
    
    done();
}

function dev(done) {
    watch("src/scss/app.scss", css)

    done();
}

exports.css = css;
exports.dev = dev;