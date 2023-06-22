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
