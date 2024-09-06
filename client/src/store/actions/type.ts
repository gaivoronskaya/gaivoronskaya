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
