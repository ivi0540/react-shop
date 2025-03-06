import React from "react";
import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: "HANDLE_BASKET_SHOW" });
  };
  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.editCountFromBasket = (param, itemId) => {
    dispatch({
      type: "EDIT_COUNT_FROM_BASKET",
      payload: { param: param, itemId: itemId },
    });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
