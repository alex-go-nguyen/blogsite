/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'default',
    domains: ['127.0.0.1', 'localhost'],
  },
  i18n: {
    locales: ['en-US', 'nl-NL'],
    defaultLocale: 'en-US',
  },
};

module.exports = nextConfig;
