import otpToken from './otpReducer';
import loginData from './loginDataReducer';
import OrderDetail from './OrderReducer'

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  otpToken,
  loginData,
  OrderDetail
});

export default rootReducer;
