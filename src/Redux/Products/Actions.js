import {
  ADD_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SORT_BY_VALUE,
} from "./Action.Types";

import axios from "axios";

export const Add_products = (payload) => {
  return {
    type: ADD_PRODUCTS,
    payload,
  };
};

export const Add_To_Cart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const Remove_From_Cart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const Fetch_Products = () => (dispatch) => {
  axios
    .get("http://localhost:3001/products")
    .then(({ data }) => {
      dispatch(Add_products(data));
    })
    .catch((err) => {
      console.log(err);
    });
};
