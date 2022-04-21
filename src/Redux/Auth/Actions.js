import { ADD_PRODUCTS, SIGNIN } from "./ActionTypes";

import axios from "axios";

export const User = (payload) => {
  return {
    type: SIGNIN,
    payload,
  };
};
