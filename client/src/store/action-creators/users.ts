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
} from "../actions/users";
import { createNewUser, refreshToken } from "../../services/users";

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

export const refreshTokenAction = () => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch(startRefreshToken());
      const newToken: IRefreshTokenResponse = await refreshToken();

      const newAccessToken = newToken.accessToken;

      localStorage.setItem("accessToken", newAccessToken);

      dispatch(successRefreshToken(newToken));
    } catch (error: unknown) {
      const errorText =
        error instanceof Error ? error.message : "Unknown error occurred";
      dispatch(errorRefreshToken(errorText));
    }
  };
};
