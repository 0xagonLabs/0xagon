/* eslint-disable import/no-extraneous-dependencies */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   poweredByHeader: false,
//   trailingSlash: true,
//   basePath: '',
//   reactStrictMode: true,
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    loader: 'akamai',
    minimumCacheTTL: 60,
    path: '',
  },
};

module.exports = nextConfig;
