export const cartReducer = (
  state = { cartList: JSON.parse(localStorage.getItem("cart")) || [] },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const payload = action.payload;
      const index = state.cartList.findIndex((el) => el.id === payload.id);
      let newState;

      if (index < 0) {
        newState = {
          ...state,
          cartList: [...state.cartList, { ...payload, quantity: 1 }],
        };
      } else {
        newState = {
          ...state,
          cartList: state.cartList.map((item, inx) =>
            inx === index ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }

      localStorage.setItem("cart", JSON.stringify(newState.cartList));
      return newState;
    case "REMOVE_FROM_CART":
      newState = {
        ...state,
        cartList: state.cartList.filter(
          (item) => item.id !== action.payload.id
        ),
      };

      localStorage.setItem("cart", JSON.stringify(newState.cartList));
      return newState;

    default:
      return state;
  }
};
