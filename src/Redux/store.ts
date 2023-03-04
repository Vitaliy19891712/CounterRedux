import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counterReducer";

export type AppStateType = ReturnType<typeof rootReducer>;

export let rootReducer = combineReducers({
  counter: counterReducer,
});
export const store = createStore(rootReducer);
