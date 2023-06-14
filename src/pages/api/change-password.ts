import Cookies from 'cookies';
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import httpProxyMiddleware from 'next-http-proxy-middleware';
import { ProxyResCallback } from 'http-proxy';

export const config = {
  api: {
    bodyParser: false,
  },
};

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method != 'POST') {
    return res.status(404).json({ message: 'method not supported' });
  }

  return new Promise((resolve, rejects) => {
    const handleChangePasswordResponse: ProxyResCallback = (proxyResponse, req, res) => {
      let apiResponseBody = '';

      proxyResponse.on('data', (chunk) => {
        apiResponseBody += chunk;
      });

      proxyResponse.on('end', () => {
        try {
          const { jwt } = JSON.parse(apiResponseBody);

          console.log('jwt', jwt);

          if (!jwt) {
            (res as NextApiResponse).status(401).json({ message: 'Invalid current password' });
            rejects(true);
          }

          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });

          cookies.set('access_token', jwt, {
            httpOnly: true,
            sameSite: 'lax',
          });

          (res as NextApiResponse).status(200).json({ message: 'Change passsword successfully' });
        } catch (error) {
          (res as NextApiResponse).status(400).json({ message: 'oops, something went wrong' });
        }

        resolve(true);
      });
    };

    const handleProxyInit = (proxy: any) => {
      proxy.on('proxyRes', handleChangePasswordResponse);
    };

    httpProxyMiddleware(req, res, {
      target: process.env.NEXT_PUBLIC_API_URL,
      pathRewrite: [
        {
          patternStr: '^/api/change-password',
          replaceStr: '/api/auth/change-password',
        },
      ],
      selfHandleResponse: true,
      changeOrigin: true,
      onProxyInit: handleProxyInit,
    });
  });
}
