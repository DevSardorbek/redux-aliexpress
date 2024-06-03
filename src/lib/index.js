import { legacy_createStore, combineReducers } from "redux";
import wishlistReducer from "./reducer/wishlist";
import { cartReducer } from "./reducer/cart";
const reduser = combineReducers({
  wishlistReducer,
  cartSlice: cartReducer,
});

export const store = legacy_createStore(reduser);
