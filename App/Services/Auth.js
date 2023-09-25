import axios from 'axios';
import {basePath} from './env';



export const register = async obj =>
  await axios.post(basePath + '/auth/registration', obj);

export const login = async obj =>
  await axios.post(basePath + '/auth/login', obj);

export const loginVerify = async obj =>
  await axios.post(basePath + '/auth/otpverification', obj);


  
// export const loginVerify = async obj =>
//   await axios.post(basePath + '/auth/otpverification', obj);
