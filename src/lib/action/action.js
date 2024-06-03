export const TOGGLE_HEART = "TOGGLE_HEART";
export const CART = "CART";
export const INC = "INC";
export const DEC = "DEC";
export const wishlistReducer = (payload) => {
  return {
    type: TOGGLE_HEART,
    payload,
  };
};
export const addToCart = (payload) => ({
  type: "ADD_TO_CART",
  payload: payload,
});
