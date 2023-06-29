<<<<<<< HEAD
const { withSentryConfig } = require('@sentry/nextjs');
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
<<<<<<< HEAD
  reactStrictMode: false,
  images: {
    loader: 'default',
    domains: ['res.cloudinary.com', '127.0.0.1'],
  },
  experimental: {
    forceSwcTransforms: true,
=======
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['127.0.0.1', 'localhost'],
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  },
};

module.exports = nextConfig;
<<<<<<< HEAD

// Injected content via Sentry wizard below

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: 'goldenowl-cg',
    project: 'blog-nextjs',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
);
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
