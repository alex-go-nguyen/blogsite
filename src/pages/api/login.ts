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
