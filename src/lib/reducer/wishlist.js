// src/redux/reducer.js
import { TOGGLE_HEART } from "../action/action";

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HEART:
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      let newValue;
      if (index < 0) {
        newValue = [...state.value, action.payload];
      } else {
        newValue = state.value.filter((el) => el.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(newValue));
      return {
        ...state,
        value: newValue,
      };
    default:
      return state;
  }
};

export default wishlistReducer;
