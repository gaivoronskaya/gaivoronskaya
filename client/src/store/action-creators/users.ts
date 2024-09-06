import { Dispatch } from "redux";
import { IUser } from "../interfaces/IUser";
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
} from "../actions/users.ts";
import {
  createNewUser,
  refreshToken,
  loginUser,
} from "../../services/users.ts";

export const addNewUser = (user: IUser) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch(startAddUser());
      const newUser = await createNewUser(user);

      if (newUser.accessToken) {
        localStorage.setItem("accessToken", newUser.accessToken);
      }
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

      if (userLogin.accessToken) {
        localStorage.setItem("accessToken", userLogin.accessToken);
      }
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
      const newToken = await refreshToken();

      const newAccessToken = newToken.accessToken;
      localStorage.setItem("accessToken", newAccessToken);

      dispatch(successRefreshToken(newToken));
      return newAccessToken;
    } catch (error: unknown) {
      const errorText =
        error instanceof Error ? error.message : "Unknown error occurred";
      dispatch(errorRefreshToken(errorText));
    }
  };
};
