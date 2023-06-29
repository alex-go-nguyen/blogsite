import axios from 'axios';
<<<<<<< HEAD
import Cookies from 'js-cookie';

export const axiosServer = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
=======

const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : process.env.API_URL;

const axiosServer = axios.create({
  baseURL: 'http://127.0.0.1:1337/api',
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosClient = axios.create({
<<<<<<< HEAD
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
=======
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
});

axiosServer.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);

<<<<<<< HEAD
axiosClient.interceptors.request.use((config) => {
  const accessToken = Cookies.get('access_token');

  config.headers['Content-Type'] = 'application/json';
  config.headers['Authorization'] = `Bearer ${accessToken}`;

  return config;
});

=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);
<<<<<<< HEAD
=======

export default axiosServer;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
