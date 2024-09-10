import { combineReducers } from "redux";
import userReducer from "./users";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
