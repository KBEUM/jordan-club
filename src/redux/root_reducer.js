import { combineReducers } from "redux";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
  shopData: shopReducer,
});

export default rootReducer;
