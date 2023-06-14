/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'default',
    domains: ['127.0.0.1', 'localhost'],
  },
  // middleware: [
  //   {
  //     // The name of the middleware
  //     name: 'next-http-proxy-middleware',
  //     // The options for the middleware
  //     options: {
  //       // The host and port of the remote server
  //       target: '127.0.0.1:1337',
  //       // The path on the remote server that will be proxied
  //       path: '/api',
  //     },
  //   },
  // ],
};

module.exports = nextConfig;
