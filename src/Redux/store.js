import { createStore, applyMiddleware, combineReducers } from "redux";
import { AuthReducer } from "./Auth/AuthReducer.js";
import thunk from "redux-thunk";
import { ProductsReducer } from "./Products/ProductsReducer.js";

const State = combineReducers({
  Auth: AuthReducer,
  Main: ProductsReducer,
});

const prevStore = localStorage.getItem("redux-state")
  ? JSON.parse(localStorage.getItem("redux-state"))
  : {};

export const store = createStore(State, prevStore, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
  localStorage.setItem("redux-state", JSON.stringify(store.getState()));
});