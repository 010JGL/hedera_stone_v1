/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

const withTM = require('next-transpile-modules')(['@bladelabs/blade-web3.js']);
module.exports = nextConfig, withTM({});

