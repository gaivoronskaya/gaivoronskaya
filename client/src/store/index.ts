import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers/index.ts";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export default store;