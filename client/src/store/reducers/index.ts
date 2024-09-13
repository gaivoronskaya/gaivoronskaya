import { combineReducers } from "redux";
import userReducer from "./users";
import appointmentsReducer from "./appointments";

export const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
