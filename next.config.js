// next.config.js
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config) {
    return config;
  },
});
