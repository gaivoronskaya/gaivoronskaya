import api from "../http/index.ts";
import { IUser } from "../store/interfaces/IUser";

export const createNewUser = async (user: IUser) => {
  const newUser = await api.post<IUser>("/users/signup", user);

  return newUser.data;
};

export const refreshToken = async () => {
  const newToken = await api.get("/users/refresh");

  return newToken.data;
};

export const loginUser = async (user: IUser) => {
  const userLogin = await api.post<IUser>("/users/signin", user);

  return userLogin.data;
};
