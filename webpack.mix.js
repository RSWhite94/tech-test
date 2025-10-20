// webpack.mix.js

let mix = require('laravel-mix');
require('laravel-mix-purgecss');

// Config

mix.webpackConfig({
    stats: {
        children: true
    }
});

// CSS

mix.sass('assets/styles/style.scss', 'dist/style.min.css')
    .options({
        processCssUrls: false
    })
    .purgeCss({
        content: [
            '*.html',
        ]
    });

// JS

mix.js(['assets/scripts/scripts.js'], 'dist/scripts.min.js');