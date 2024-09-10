import userEnums from "../enums/users";
import { IUser } from "../interfaces/IUser";
import { IRefreshTokenResponse } from "../interfaces/IRefreshTokenResponse";

export interface StartAddUserAction {
  type: typeof userEnums.ADD_USER;
}

export interface SuccessAddUserAction {
  type: typeof userEnums.ADD_USER_SUCCESS;
  payload: IUser;
}

export interface ErrorAddUserAction {
  type: typeof userEnums.ADD_USER_ERROR;
  error: string;
}

export interface StartRefreshToken {
  type: typeof userEnums.REFRESH_TOKEN;
}

export interface SuccessRefreshToken {
  type: typeof userEnums.REFRESH_TOKEN_SUCCESS;
  payload: IRefreshTokenResponse;
}

export interface ErrorRefreshToken {
  type: typeof userEnums.REFRESH_TOKEN_ERROR;
  error: string;
}
