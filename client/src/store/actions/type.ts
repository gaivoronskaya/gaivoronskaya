import {
  StartAddUserAction,
  SuccessAddUserAction,
  ErrorAddUserAction,
  StartRefreshToken,
  SuccessRefreshToken,
  ErrorRefreshToken,
  StartLoginUserAction,
  SuccessLoginUserAction,
  ErrorLoginUserAction,
  StartGetAppointments ,
  SuccessGetAppointments,
  ErrorGetAppointments,
  StartCreateAppointments,
  SuccessCreateAppointments,
  ErrorCreateAppointments,
} from "./interfaces";

export type UserActionTypes =
  | StartAddUserAction
  | SuccessAddUserAction
  | ErrorAddUserAction
  | StartRefreshToken
  | SuccessRefreshToken
  | ErrorRefreshToken
  | StartLoginUserAction
  | SuccessLoginUserAction
  | ErrorLoginUserAction;

export type AppointmentsActionTypes =
  | StartGetAppointments 
  | SuccessGetAppointments
  | ErrorGetAppointments
  | StartCreateAppointments
  | SuccessCreateAppointments
  | ErrorCreateAppointments;
