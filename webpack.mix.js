const mix = require('laravel-mix');
const {disableNotifications} = require("laravel-mix");
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .purgeCss()
    .version()
    .webpackConfig(require('./webpack.config'))
    .disableNotifications()
    .browserSync('http://127.0.0.1:8000/');

if (mix.inProduction()) {
    mix.version();
}
