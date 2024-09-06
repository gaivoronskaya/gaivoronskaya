import { errorType } from "./type";
import { IUser } from "../interfaces/IUser";

export interface IUserReduser {
  user?: IUser | {};
  error?: errorType;
  isAuth: boolean;
}

export interface IAction {
  type: string;
  payload?: IUser;
  error?: errorType;
}
