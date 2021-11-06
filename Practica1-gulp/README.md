# Practicas-SYTWC

<br />
<p align="center">

  <h3 align="center">README PRÁCTICA GULP Y LANDING PAGE </h3>

  <p align="center">
    Readme de la práctica de gulp y landing page
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica1-sass"><strong>Práctica 1 - SASS »</strong></a>
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica1-gulp"><strong>Práctica 1 - GULP »</strong></a>
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica2-webcomponent"><strong>Práctica 2 - WEB COMPONENTS »</strong></a>
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/tree/main/Practica3-gatsby"><strong>Práctica 3 - GATSBY »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/issues">Issues</a>
    ·
    <a href="https://github.com/alu0101102726/Practicas-SYTWC/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#instalación">Instalación</a></li>
    <li><a href="#automatizar-tareas">Automatizar tareas</a></li>
    <li><a href="#landing-page">Landing Page</a></li>
  </ol>
</details>

## Instalación
Como primera parte de la actividad se tuvo que hacer una instalación de todo lo necesario. En primer lugar, mencionar que las prácticas se van a a realizar en la máquina virtual. Para empezar, se tuvo que instalar nodejs, npm y git para así tener una configuración inicial, asumiendo que también se realizó la pertinente configuración de los mismos. Luego, se continuó instalando el generador y gulp que se van a usar más adelante. Ya con esto se creó un directorio sencillo con el generador-learnfe. A continuación se va a mostrar de forma breve la estructura de directorios:

```
.
├── Practica1-gulp
    ├── README.md
    ├── gulpfile.js
    ├── src
    ├── html
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── scss
├── Practica1-sass
    ├── README.md
    ├── ejercicio2.scss
    ├── ejercicio3.scss
    ├── ejercicio4.scss
    ├── ejercicio5.scss
    ├── ejercicio6.scss
    └── ejercicio7.scss
├── README.md
├── node_modules
└── package-lock.json
```

## Automatizar tareas
Para llevar a cabo esta tarea el primer paso fue entender como funcionaba la sintaxis de gulp. Ya cuando eso estaba todo comprendido, se pasó a implementar aquellas tareas que se querían automatizar. Principalmente los objetivos fueron:
* Actualizaciones en tiempo real en el navegador: En esta primera, el objetivo era que cuando se hicieran cambios en algún fichero sass, html o js se actualizara el navegador. Para ello se hizo uso de browser-sync, que nos va a permitir que cada vez que se actualice alguno de esos archivos nos recargue la página del navegador. Para poder llevar a cabo se implementó una función sencilla:
  ```js
  function browsersync() {
    let files = [
      'html/*.html',
      'scss/*.scss',
      'src/scripts/*.js'
    ];
    browserSync.init({
      server: {
        baseDir: "./",
        index: "html/index.html"
      },
      ui: {
        port: 8088	
      },
      port: 8080,
      host: "10.6.128.23",
      open: false
    });    
      gulp.watch(files).on('change', browserSync.reload);
      gulp.watch(files[1]).on('change', watch);
  }
  ```
  En esta función se definen los archivos por los que se van a escuchar los cambios, se define a su vez los puertos, host y directorio base. Por último se le especifica que cuando cada uno de los archivos sufra un cambio actualice el navegador.

* Minificar css: En este apartado, se automatizó la tarea que cada vvez que se hiciera una modificación en el archivo scss, se hiciera una transpilación y se convirtiera ese código en css. Para implementar esta tarea se desarrolló la siguiente función:
  ```js
  function watch() {
    gulp.watch('scss/*.scss', (done) => {
      cssTranspile(done);
    });
  }
  
  function cssTranspile(cb) {
    return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles/'));
  }
  ```
  La primera es la encargada de estar a la escucha de los ficheros scss, en caso de que haya una modificación pues llama a la segunda función encargada de realizar la transpilación del fichero en la carpeta styles.

* Sourcemaps: Para acabar con las tareas de automatización, se desarrolló una función que va a permitir realizar un mapeo entre el código original y el código transformado (a esta función se le dará uso cuando se empiece a usar los webpacks). Para hacer esto se implementó lo siguiente:
  ```js
  function sourcemaps(cb) {
    gulp.src('src/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(plugin1())
    .pipe(plugin2())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist'));
    cb();
  }
  ```
