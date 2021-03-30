import axios from 'axios';
import storesApi from '../config/storesApi';

const httpService = axios.create({
  baseURL: storesApi.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

httpService.interceptors.request.use(
  (config) => {
    config.headers.contentType = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);

export default httpService;
