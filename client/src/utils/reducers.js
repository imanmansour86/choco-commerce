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
      let newState = state.cartItems.filter((product) => {
        console.log("the entire product to remove is", product.product.id);
        return product.product.id !== action.cartItem.id;
      });

      console.log("action.cart item", action.cartItem.id);
      console.log("new state after filter is an array", newState);
      return {
        ...state,
        cartItems: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
