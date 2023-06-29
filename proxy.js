<<<<<<< HEAD
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: process.env.NEXT_PUBLIC_API_URL,
//       changeOrigin: true,
//     }),
//   );
// };
=======
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:1337', // Thay thế bằng URL của backend bạn muốn proxy
      changeOrigin: true,
    }),
  );
};
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
