import axios from 'axios';
import {basePath} from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';
let headers = {token:global.token}

// AsyncStorage.getItem('token').then(resp => {
//   console.log('token ==================', resp);
//   headers.token=resp
// });



export const getProduct = async (catId) =>
  await axios.get(basePath + '/product/getbycatid?catId='+ catId, {headers});

export const createProduct = async obj =>
  await axios.post(basePath + '/product/create', obj,{headers});
  
export const updateProduct = async obj =>
  await axios.put(basePath + '/product/update', obj,{headers});

export const deleteProduct = async id =>
  await axios.delete(basePath + '/product/delete/'+id,{headers});