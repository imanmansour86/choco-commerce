import { useReducer } from "react";
import {
  UPDATE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cartItems: [...action.cartItems],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.cartItem],
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
