import { combineReducers } from 'redux';
import productReducer from '../components/product/productReducer';

export default combineReducers({
  product: productReducer
});
