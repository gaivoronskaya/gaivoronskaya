import userEnums from "../enums/users.ts";
import { IUser } from "../interfaces/IUser";
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
} from "./interfaces.ts";

export const startAddUser = (): StartAddUserAction => ({
  type: userEnums.ADD_USER,
});

export const successAddUser = (payload: IUser): SuccessAddUserAction => ({
  type: userEnums.ADD_USER_SUCCESS,
  payload,
});

export const errorAddUser = (error: string): ErrorAddUserAction => ({
  type: userEnums.ADD_USER_ERROR,
  error,
});

export const startRefreshToken = (): StartRefreshToken => ({
  type: userEnums.REFRESH_TOKEN,
});

export const successRefreshToken = (payload: IUser): SuccessRefreshToken => ({
  type: userEnums.REFRESH_TOKEN_SUCCESS,
  payload,
});

export const errorRefreshToken = (error: string): ErrorRefreshToken => ({
  type: userEnums.REFRESH_TOKEN_ERROR,
  error,
});

export const startLoginUser = (): StartLoginUserAction => ({
  type: userEnums.LOGIN_USER,
});

export const successLoginUser = (payload: IUser): SuccessLoginUserAction => ({
  type: userEnums.LOGIN_USER_SUCCESS,
  payload,
});

export const errorLoginUser = (error: string): ErrorLoginUserAction => ({
  type: userEnums.LOGIN_USER_ERROR,
  error,
});
