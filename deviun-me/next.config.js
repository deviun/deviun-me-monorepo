require('dotenv').config();

module.exports = {
  publicRuntimeConfig: {
    API_SERVER: process.env.API_SERVER,
  },
  serverRuntimeConfig: {
    INTERNAL_API_SERVER: process.env.INTERNAL_API_SERVER,
  },
};
