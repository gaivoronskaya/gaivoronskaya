import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import store from "../store";
import { refreshTokenAction } from "../store/action-creators/users";
import { errorRefreshToken } from "../store/actions/users";
import { baseURL } from "../constants";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshTokenAction());
        const newAccessToken = localStorage.getItem("accessToken");

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api.request(originalRequest);
        }
      } catch (error) {
        store.dispatch(errorRefreshToken(error.message));
        throw error;
      }
    }

    return Promise.reject(error);
  }
);

export default api;