import api from "../http/index.ts";
import { IUser } from "../store/interfaces/IUser";
import { IRefreshTokenResponse } from "../store/interfaces/IRefreshTokenResponse.ts";

export const createNewUser = async (user: IUser) => {
  const newUser = await api.post<IUser>("/users/signup", user);

  return newUser.data;
};

export const refreshToken = async () => {
  const newToken = await api.get<IRefreshTokenResponse>("/users/refresh");

  return newToken.data;
};
