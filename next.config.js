/**
 * @type {import('next').NextConfig}
 */

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// const nextConfig = withBundleAnalyzer({
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
//   trailingSlash: true,
// });

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
