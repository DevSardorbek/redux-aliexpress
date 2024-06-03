import { INC, DEC } from "../../lib/action/action";

const initialState = 1;

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return (state = state + 1);
    case DEC:
      return (state = state - 1);
    default:
      return state;
  }
};
