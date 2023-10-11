let mix = require('laravel-mix');

mix.webpackConfig({ // better debug
  stats: {
      children: true,
  },
});

mix.options({
    processCssUrls: false
  })
  .setPublicPath(process.env.MIX_DIST)
  .js(
    process.env.MIX_SRC + '/scripts/app.js',
    process.env.MIX_DIST + '/js/'
  ).autoload({
    jquery: ['$', 'window.jQuery']
  })
  .sass('src/styles/app.scss', 'css')
  .copyDirectory(
    process.env.MIX_SRC + '/fonts/',
    process.env.MIX_DIST + '/fonts/'
  )
  .copyDirectory(
    process.env.MIX_SRC + '/images/',
    process.env.MIX_DIST + '/img/'
  )
  .browserSync({
    proxy: process.env.MIX_PROXY,
    files: [
      process.env.MIX_DIST + '/js/**/*.js',
      process.env.MIX_DIST + '/css/**/*.css',
      'public/site/modules/**/*.php',
      'public/site/templates/**/*.php',
      'public/index.php'
    ],
  });
