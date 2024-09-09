import { combineReducers } from "redux";
import userReducer from "./users.ts";
import appointmentsReducer from "./appointments.ts";

export const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
