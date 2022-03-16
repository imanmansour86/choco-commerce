import { useReducer } from "react";
import {
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INITIALIZE,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CART_QUANTITY:
      const newItems = state.cartItems.map((product) => {
        if (action.cartItem.id === product.product.id) {
          product.purchaseQuantity = action.purchaseQuantity;
        }
        return product;
      });
      localStorage.setItem("cart_items", JSON.stringify(newItems || []));
      return {
        ...state,
        cartItems: newItems,
      };

    case ADD_TO_CART:
      const newCartItems = [...state.cartItems, action.cartItem];
      localStorage.setItem("cart_items", JSON.stringify(newCartItems || []));
      return {
        ...state,
        cartItems: newCartItems,
      };

    case INITIALIZE:
      const currentItems = localStorage.getItem("cart_items") || "[]";
      return {
        ...state,
        cartItems: JSON.parse(currentItems),
      };

    case REMOVE_FROM_CART:
      let newStateCartItems = state.cartItems.filter((product) => {
        return product.product.id !== action.cartItem.id;
      });

      localStorage.setItem(
        "cart_items",
        JSON.stringify(newStateCartItems || [])
      );
      return {
        ...state,
        cartItems: newStateCartItems,
      };

    case CLEAR_CART:
      localStorage.setItem("cart_items", JSON.stringify([]));
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
