// next.config.js
const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config) {
    return config;
  },
});


function removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
  );
  config.module.rules.forEach((rule) => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach((use) => {
        if (use.loader === 'css-loader' && use.options) {
          console.log(use.options);
          delete use.options.minimize;
        }
      });
    }
  });
}

module.exports = withTypescript(withCSS({
  webpack(config) {
    removeMinimizeOptionFromCssLoaders(config);
    return config;
  },
}));
