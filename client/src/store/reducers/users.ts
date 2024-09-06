import userEnums from "../enums/users.ts";
import { IUserReduser, IAction } from "./interface";

const initialState = {
  user: {},
  error: null,
  isAuth: false,
};

const userReducer = (
  state: IUserReduser = initialState,
  action: IAction
): IUserReduser => {
  switch (action.type) {
    case userEnums.ADD_USER:
      return {
        ...state,
        error: null,
      };

    case userEnums.ADD_USER_SUCCESS:
      return {
        user: action.payload,
        error: null,
        isAuth: true,
      };

    case userEnums.ADD_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isAuth: false,
      };

    case userEnums.REFRESH_TOKEN:
      return {
        ...state,
        error: null,
      };
    case userEnums.REFRESH_TOKEN_SUCCESS:
      return {
        isAuth: true,
        error: null,
      };
    case userEnums.REFRESH_TOKEN_ERROR:
      return {
        ...state,
        error: action.error,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default userReducer;
