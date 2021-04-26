import axios from 'axios';

const httpService = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
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
