  /** @type {import('next').NextConfig} */

  const { i18n } = require("./next-i18next.config.js");
  const nextConfig = {
    reactStrictMode: true,
    i18n,
    experimental:{
      forceSwcTransforms: true
    }
  };

  module.exports = nextConfig;
