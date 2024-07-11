import axios, { AxiosError, AxiosResponse } from 'axios';
import { logOut } from '../authenticate';
import { KEYS } from '../constants/keys';
import { userAuth } from '../utils/user-auth';
export const api = axios.create({
  baseURL: KEYS.HOST.API_URL,
  timeout: 300000
});

api.interceptors.request.use(
  async (config) => {
    const token = userAuth.get.token();
    if (token && config.headers) {
      config.headers['Authorization'] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) logOut();

    return Promise.reject(error);
  }
);
