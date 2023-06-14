import axios from 'axios';

export function getStrapiURL(path: string = '') {
  return `http://127.0.0.1:1337${path}`;
}

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;
