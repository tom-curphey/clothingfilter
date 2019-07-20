import { LOADED_PRODUCTS, SET_PRODUCT_SIZE } from '../../redux/types';

const initialState = {
  products: null,
  selectedSize: 'default',
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADED_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload
      };

    case SET_PRODUCT_SIZE:
      return {
        ...state,
        loading: false,
        selectedSize: payload
      };

    default:
      return state;
  }
}
