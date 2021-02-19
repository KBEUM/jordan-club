import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import promiseMiddleware from "redux-promise";
import rootReducer from "./root_reducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);

export const persistor = persistStore(store);
