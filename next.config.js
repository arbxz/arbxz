/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["default", "en", "fr"],
  //   defaultLocale: "default",
  //   localeDetection: false,
  //   domains: [
  //     {
  //       domain: "arbxz.com",
  //       defaultLocale: "en",
  //     },
  //   ],
  // },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
