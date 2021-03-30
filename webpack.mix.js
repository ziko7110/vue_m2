let mix = require('laravel-mix');

mix.js('resources/js/home.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css', {
      implementation: require('dart-sass')
    });

mix.browserSync({
  files: [
    "public/**/*.*"
  ],
  proxy: "http://localhost:8000"
});