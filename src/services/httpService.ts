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
    // TODO Remove after development, this is for debugging all requests
    console.log(config);
    return config;
  },
  (error) => Promise.reject(error)
);

export default httpService;
