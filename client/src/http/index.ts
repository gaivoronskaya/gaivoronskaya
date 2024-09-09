import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig  } from "axios";
import store from "../store/index.ts";
import { refreshTokenAction } from "../store/action-creators/users.ts";
import { errorRefreshToken } from "../store/actions/users.ts";
import { baseURL } from "../constants.ts";
import { IRefreshTokenResponse } from "./interfaces";

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
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const { accessToken }: IRefreshTokenResponse = await store.dispatch(refreshTokenAction() as any);
        
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return api.request(originalRequest);
      } catch (refreshError: any) {
        store.dispatch(errorRefreshToken(refreshError.message));
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export default api;