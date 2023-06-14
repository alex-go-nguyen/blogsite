import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import { NextApiRequest, NextApiResponse } from 'next';

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    const cookies = new Cookies(req, res);

    const accessToken = cookies.get('access_token');

    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    req.headers.cookie = '';

    proxy.web(req, res, {
      target: process.env.NEXT_PUBLIC_API_URL,
      autoRewrite: false,
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.on('proxyRes', () => resolve(true));
  });
}
