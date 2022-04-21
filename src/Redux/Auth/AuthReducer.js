import { SIGNIN } from "./ActionTypes";

const user = {};

export const AuthReducer = (state = user, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      return { user: payload };
    default:
      return state;
  }
};
