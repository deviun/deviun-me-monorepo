require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  },
  ...withTypescript()
};
