import { ADD_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from "./Action.Types";
const products = {
  allProducts: [],
  cartProducts: [],
};

export const ProductsReducer = (state = products, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCTS:
      return { ...state, allProducts: payload };
    case ADD_TO_CART:
      return { ...state, cartProducts: [...state.cartProducts, payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.filter((item) => {
            return item.id !== payload;
          }),
        ],
      };
    default:
      return state;
  }
};
