<<<<<<< HEAD
// import Cookies from 'cookies';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import httpProxyMiddleware from 'next-http-proxy-middleware';
// import { ProxyResCallback } from 'http-proxy';
// import { StringDecoder } from 'string_decoder';
// const decoder = new StringDecoder('utf8');
// const iconv = require('iconv-lite');

// export const config = {
//   api: {
//     externalResolver: true,
//     bodyParser: false,
//   },
// };

// type Data = {
//   token?: string;
//   message: string;
// };

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   if (req.method != 'POST') {
//     return res.status(404).json({ message: 'method not supported' });
//   }

//   return new Promise(() => {
//     req.headers.cookie = '';

//     const handleLoginResponse: ProxyResCallback = (proxyResponse, req, res) => {
//       let apiResponseBody = '';

//       proxyResponse.on('data', (chunk) => {
//         apiResponseBody += chunk;
//       });

//       proxyResponse.on('end', () => {
//         try {
//           const data = JSON.parse(apiResponseBody);

//           const { jwt } = data;

//           if (!jwt) {
//             (res as NextApiResponse).status(401).json({ message: 'invalid username or password' });
//             return res.end();
//           } else {
//             const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });

//             cookies.set('access_token', jwt, {
//               httpOnly: true,
//               sameSite: 'lax',
//             });
//             (res as NextApiResponse).status(200).json({ message: 'login successfully' });
//           }
//         } catch (error) {
//           (res as NextApiResponse).status(400).json({ error: error });
//         }

//         return res.end();
//       });
//     };

//     const handleProxyInit = (proxy: any) => {
//       proxy.on('proxyRes', handleLoginResponse);
//     };

//     httpProxyMiddleware(req, res, {
//       target: process.env.NEXT_PUBLIC_API_URL,
//       pathRewrite: [
//         {
//           patternStr: '^/api/login',
//           replaceStr: '/api/auth/local',
//         },
//       ],
//       autoRewrite: true,
//       selfHandleResponse: true,
//       changeOrigin: true,
//       onProxyInit: handleProxyInit,
//     });
//   });
// }
=======
import Cookies from 'cookies';
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';
import { ProxyResCallback } from 'http-proxy';

export const config = {
  api: {
    bodyParser: false,
  },
};

type Data = {
  token?: string;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method != 'POST') {
    return res.status(404).json({ message: 'method not supported' });
  }

  return new Promise((resolve, rejects) => {
    req.headers.cookie = '';

    const handleRegisterResponse: ProxyResCallback = (proxyResponse, req, res) => {
      let apiResponseBody = '';

      proxyResponse.on('data', (chunk) => {
        apiResponseBody += chunk;
      });

      proxyResponse.on('end', () => {
        try {
          const { jwt } = JSON.parse(apiResponseBody);

          if (!jwt) {
            (res as NextApiResponse).status(401).json({ message: 'invalid username or password' });
            rejects(true);
          }

          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });

          cookies.set('access_token', jwt, {
            httpOnly: true,
            sameSite: 'lax',
          });

          (res as NextApiResponse).status(200).json({ message: 'login successfully' });
        } catch (error) {
          (res as NextApiResponse).status(400).json({ message: 'oops, something went wrong' });
        }

        resolve(true);
      });
    };

    const handleProxyInit = (proxy: any) => {
      proxy.on('proxyRes', handleRegisterResponse);
    };

    httpProxyMiddleware(req, res, {
      target: 'http://127.0.0.1:1337',
      pathRewrite: [
        {
          patternStr: '^/api/login',
          replaceStr: '/api/auth/local',
        },
      ],
      selfHandleResponse: true,
      changeOrigin: true,
      onProxyInit: handleProxyInit,
    });
  });
}
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
