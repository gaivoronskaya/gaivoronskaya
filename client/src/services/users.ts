import api from "../http";
import { IUser } from "../store/interfaces/IUser";
import { IRefreshTokenResponse } from "../http/interfaces";

export const createNewUser = async (user: IUser) => {
  const newUser = await api.post<IUser>("/users/signup", user);

  return newUser.data;
};

export const refreshToken = async () => {
  const newToken = await api.get<IRefreshTokenResponse>("/users/refresh");

  return newToken.data;
};

export const loginUser = async (user: IUser) => {
  const userLogin = await api.post<IUser>("/users/signin", user);

  return userLogin.data;
};
