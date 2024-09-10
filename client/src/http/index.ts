import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import store, { AppDispatch } from "../store";
import { refreshTokenAction } from "../store/action-creators/users";
import { errorRefreshToken } from "../store/actions/users";
import { baseURL } from "../constants";
import { IRefreshTokenResponse } from "../store/interfaces/IRefreshTokenResponse";

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
        const dispatch: AppDispatch = store.dispatch;
        const { accessToken }: IRefreshTokenResponse = await dispatch(
          refreshTokenAction()
        );

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return api.request(originalRequest);
      } catch (error) {
        store.dispatch(errorRefreshToken(error.message));
      }
    }

    return Promise.reject(error);
  }
);

export default api;
