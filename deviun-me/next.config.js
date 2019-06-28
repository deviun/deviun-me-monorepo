require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
module.exports = {
  publicRuntimeConfig: {
    API_SERVER: process.env.API_SERVER,
  },
  ...withTypescript()
};
