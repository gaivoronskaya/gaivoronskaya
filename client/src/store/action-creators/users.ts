import { Dispatch } from "redux";
import { IUser } from "../interfaces/IUser";
import { IRefreshTokenResponse } from "../interfaces/IRefreshTokenResponse";
import { UserActionTypes } from "../actions/type";
import {
  startAddUser,
  successAddUser,
  errorAddUser,
  startRefreshToken,
  successRefreshToken,
  errorRefreshToken,
  startLoginUser,
  successLoginUser,
  errorLoginUser,
} from "../actions/users";
import { createNewUser, refreshToken, loginUser } from "../../services/users";

export const addNewUser = (user: IUser) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch(startAddUser());
      const newUser = await createNewUser(user);

      localStorage.setItem("accessToken", newUser.accessToken);

      dispatch(successAddUser(newUser));
    } catch (error) {
      const errorText =
        error instanceof Error ? error.message : "Unknown error occurred";
      dispatch(errorAddUser(errorText));
    }
  };
};

export const loginUserAction = (user: IUser) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch(startLoginUser());
      const userLogin = await loginUser(user);

      localStorage.setItem("accessToken", userLogin.accessToken);
      dispatch(successLoginUser(userLogin));
    } catch (error) {
      const errorText =
        error instanceof Error ? error.message : "Unknown error occurred";
      dispatch(errorLoginUser(errorText));
    }
  };
};

export const refreshTokenAction = () => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch(startRefreshToken());
      const newToken: IRefreshTokenResponse = await refreshToken();

      localStorage.setItem("accessToken", newToken.accessToken);

      dispatch(successRefreshToken(newToken));
    } catch (error: unknown) {
      const errorText =
        error instanceof Error ? error.message : "Unknown error occurred";
      dispatch(errorRefreshToken(errorText));
    }
  };
};
