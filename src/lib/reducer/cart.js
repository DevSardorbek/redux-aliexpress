export const cartReducer = (
  state = { cartList: JSON.parse(localStorage.getItem("cart")) || [] },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const payload = action.payload;
      const index = state.cartList.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        return {
          ...state,
          cartList: [...state.cartList, { ...payload, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          cartList: state.cartList.map((item, inx) =>
            inx === index ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
    default:
      return state;
  }
};
