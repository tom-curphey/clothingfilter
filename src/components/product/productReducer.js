import { LOADED_PRODUCTS } from '../../redux/types';

const initialState = {
  products: null,
  loading: true,
  user: null
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

    default:
      return state;
  }
}
