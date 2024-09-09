import { errorType } from "./type";
import { IUser, IAppointment } from "../interfaces/IUser";

export interface IUserReduser {
  user?: IUser | {};
  error?: errorType;
  isAuth: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
  error?: errorType;
}

export interface IAppointmentsReduser {
  appointments: [];
  error?: errorType;
}