import Cookies from 'cookies';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const proxy = httpProxy.createProxyServer({});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve, rejects) => {
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    // don't forward cookies to API server
    req.headers.cookie = '';

    const handleResponse: ProxyResCallback = (proxyResponse, req, res) => {
      let apiResponseBody = '';

      proxyResponse.on('data', (chunk) => {
        apiResponseBody += chunk;
      });

      proxyResponse.on('end', () => {
        try {
          const data = JSON.parse(apiResponseBody);
          if (data.data === null) {
            (res as NextApiResponse).status(400).json({ message: 'oops, something went wrong' });
          }

          (res as NextApiResponse).status(200).json(data);
        } catch (error) {
          (res as NextApiResponse).status(400).json({ message: 'oops, something went wrong' });
        }

        resolve(true);
      });
    };
    const handleProxyInit = (proxy: any) => {
      proxy.on('proxyRes', handleResponse);
    };

    httpProxyMiddleware(req, res, {
      target: 'http://127.0.0.1:1337',
      selfHandleResponse: true,
      changeOrigin: true,
      onProxyInit: handleProxyInit,
    });
  });
}
