import { errorType } from "./type";
import { IUser } from "../interfaces/IUser";

export interface IUserStore {
  user?: IUser | {};
  error?: errorType;
  isAuth: boolean;
}

export interface IAction<T = any> {
  type: string;
  payload?: T;
  error?: errorType;
}
