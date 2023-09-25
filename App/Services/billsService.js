import axios from 'axios';
import {basePath} from './env';
let headers = {token:global.token}





export const getAccounts = async (type) =>
  await axios.get(basePath + '/account/'+type, {headers});

  export const createAccount = async (obj) =>
  await axios.post(basePath + '/account',obj, {headers});

  export const getTransection = async (accountId,type,page=0) =>
  await axios.get(basePath + '/transection/'+accountId+'?type='+type+'&page='+page, {headers});

export const createTransection = async obj =>
  await axios.post(basePath + '/transection', obj,{headers});