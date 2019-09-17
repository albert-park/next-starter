// next.config.js
const withCSS = require('@zeit/next-css');

function removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
  );
  config.module.rules.forEach((rule) => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach((use) => {
        if (use.loader === 'css-loader' && use.options) {
          console.log(use.options);

          // eslint-disable-next-line no-param-reassign
          delete use.options.minimize;
        }
      });
    }
  });
}

module.exports = withCSS({
  webpack(config) {
    removeMinimizeOptionFromCssLoaders(config);
    return config;
  },
});
