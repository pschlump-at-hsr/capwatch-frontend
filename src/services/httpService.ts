import axios, { AxiosRequestConfig } from 'axios';

const httpService = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
  maxRedirects: 0,
  headers: {
    'Content-Type': 'application/json'
  }
});

httpService.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default httpService;
