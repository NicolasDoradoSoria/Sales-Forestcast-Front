import axios, { type AxiosError } from 'axios'
import { accessTokenKey, refreshTokenKey } from '../../router/context/authGuard'
import { AuthService } from '../auth';

const API_URL = 'http://localhost:4000/'

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(accessTokenKey)

  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})

axiosClient.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      const refreshToken = localStorage.getItem(refreshTokenKey);
      if (refreshToken) {
        try {
          const { data } = await axiosClient.post('/auth/login', { refreshToken });
          localStorage.setItem(accessTokenKey, data.accessToken);
          error.config.headers['Authorization'] = `Bearer ${data.accessToken}`;
          return axiosClient(error.config);
        } catch (err) {
          localStorage.removeItem(accessTokenKey);
          localStorage.removeItem(refreshTokenKey);
          window.location.href = '/login'; 
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient