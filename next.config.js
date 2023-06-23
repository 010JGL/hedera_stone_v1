/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  transpilePackages: ["@bladelabs/blade-web3.js"],
};
