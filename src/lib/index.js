import { legacy_createStore, combineReducers } from "redux";
import wishlistReducer from "./reducer/wishlist";
import { cartReducer } from "./reducer/cart";
import { counter } from "./reducer/counter";
const reduser = combineReducers({
  wishlistReducer,
  cartSlice: cartReducer,
  counter,
});

export const store = legacy_createStore(reduser);
