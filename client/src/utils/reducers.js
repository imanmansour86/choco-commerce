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
        console.log("single product", action.purchaseQuantity);
        console.log(
          "product.product.purchaseQuantity",
          product.purchaseQuantity
        );
        console.log("action.purchaseQuantity", action.purchaseQuantity);
        if (action.cartItem.id === product.product.id) {
          product.purchaseQuantity = action.purchaseQuantity;
        }
        return product;
      });
      localStorage.setItem("cart_items", JSON.stringify(newItems));
      return {
        ...state,
        cartItems: newItems,
      };

    case ADD_TO_CART:
      const newCartItems = [...state.cartItems, action.cartItem];
      localStorage.setItem("cart_items", JSON.stringify(newCartItems));
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
      let newState = state.cartItems.filter((product) => {
        console.log("the entire product to remove is", product.product.id);
        return product.product.id !== action.cartItem.id;
      });

      console.log("action.cart item", action.cartItem.id);
      console.log("new state after filter is an array", newState);
      localStorage.setItem("cart_items", JSON.stringify(newState.cartItems));
      return {
        ...state,
        cartItems: newState,
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
