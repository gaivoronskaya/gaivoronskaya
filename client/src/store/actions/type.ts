import {
  StartAddUserAction,
  SuccessAddUserAction,
  ErrorAddUserAction,
  StartRefreshToken,
  SuccessRefreshToken,
  ErrorRefreshToken,
} from "./interface";

export type UserActionTypes =
  | StartAddUserAction
  | SuccessAddUserAction
  | ErrorAddUserAction
  | StartRefreshToken
  | SuccessRefreshToken
  | ErrorRefreshToken;
