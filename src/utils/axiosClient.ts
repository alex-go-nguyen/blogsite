import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : process.env.API_URL;

const axiosServer = axios.create({
  baseURL: 'http://127.0.0.1:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosServer.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);

export default axiosServer;
