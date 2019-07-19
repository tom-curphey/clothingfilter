import axios from 'axios';
import { LOADED_PRODUCTS } from '../../redux/types';

// Load Products
export const loadProducts = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3'
    );
    // console.log('CHECK: ', res.data);

    // TODO: run a check to see if products array is empty from the api
    // If empty display notice to user

    dispatch({ type: LOADED_PRODUCTS, payload: res.data });
  } catch (err) {
    // TODO: if there is an issue with the products being loaded from the API run error function
    console.log('err', err);
  }
};
