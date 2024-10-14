import { localStorageKeys } from '@core/config/keys';
import Axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { auth } from './firebase';

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use(
  async (config) => {
    const value = localStorage.getItem(localStorageKeys.FIREBASE_TOKENS);
    const keys = JSON.parse(value || '{}');
    if (keys?.accessToken) {
      config.headers = {
        Authorization: `Bearer ${keys.accessToken}`,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const access_token = await auth?.currentUser?.getIdToken(true);

      localStorage.setItem(
        localStorageKeys.FIREBASE_TOKENS,
        JSON.stringify({
          accessToken: access_token,
        })
      );
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

const apiInstance = {
  get: <TResponse>(url: string, config?: AxiosRequestConfig) =>
    axios.get<TResponse>(url, config).then((res) => res.data),
  post: <TResponse>(url: string, body?: object, config?: any) =>
    axios.post<TResponse>(url, body, config).then((res) => res.data),
  put: <TResponse>(url: string, body?: object, config?: any) =>
    axios.put<TResponse>(url, body, config).then((res) => res.data),
  delete: <TResponse>(url: string, body?: object) =>
    axios.delete<TResponse>(url, body).then((res) => res.data),
};

export default apiInstance;
