require('dotenv').config();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  publicRuntimeConfig: {
    API_SERVER: process.env.API_SERVER,
  },
  serverRuntimeConfig: {
    INTERNAL_API_SERVER: process.env.INTERNAL_API_SERVER,
  },
  ...withBundleAnalyzer({}),
};
