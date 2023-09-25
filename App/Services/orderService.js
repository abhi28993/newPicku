import axios from 'axios';
import {basePath} from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';
let headers = {}

// AsyncStorage.getItem('token').then(resp => {
//   console.log('token ==================', resp);
  // headers.token=global.token
// });



export const getStatusWiseOrderCount = async () =>{
  console.log('tpken',headers);
  let resp =await AsyncStorage.getItem('token')
  headers.token=resp
  global.token=resp
  let data =await axios.get(basePath + '/order/statuswisecount', {headers});
  return data
}

export const getOrders = async (status) =>{
  let data =await axios.get(basePath + '/order/getbystatus/'+status, {headers});
  return data
}

export const updateOrderStatus = async (obj) =>{
  let data =await axios.put(basePath + '/order/updatestatus',obj, {headers});
  return data
}

