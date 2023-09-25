import axios from 'axios';
import {basePath} from './env';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
let headers = {token: global.token};

export const getFiles = async (key='category',val='gallery') =>
  await axios.get(basePath + '/file/getfiles?search='+val+"&type=category", {headers});

export const uploadFile = async fd => {
  let hdr = new Headers();
  hdr.append('Content-Type', 'multipart/form-data');
  hdr.append('token', global.token);
  return await fetch(basePath + '/file/upload', {
    method: 'post',
    body: fd,
    headers: hdr,
  });
};

export const uploadImage = async (type,category='gallery') => {
  let hdr = new Headers();
  hdr.append('accept', 'application/json');
  hdr.append('Content-Type', 'multipart/form-data');
  hdr.append('token', global.token);
  let data;
  const patams = {
    mediaType: 'photo',
    width: 300,
    height: 400,
    maxWidth: 300,
    maxHeight: 400,
    cropping: true,
    quality: 1,
  };
  if (type == 'camera') data = await launchCamera(patams);
  if (type == 'gallery') data = await launchImageLibrary(patams);

  if (data.assets?.length) {
    let fd = new FormData();
    let fileData = {
      name: data.assets[0].fileName,
      type: data.assets[0].type,
      uri: data.assets[0].uri,
    };

    console.log('image data ==========', data.assets[0].fileSize);

    fd.append('file', fileData);
    fd.append('category', category);
    let respData= await fetch(basePath + '/file/upload', {
      method: 'post',
      body: fd,
      headers: hdr,
    })
    let finalData=await respData.json()
    return finalData.data[0]
  } else {
    throw Error('file not found')
  }
};

export  const getTimeDisplay = date => {
  const now = Date.now();
  const diff = now - new Date(date).getTime();
  const seconds = Math.floor(diff / 1000);

  if (seconds < 5) {
    return 'Just now';
  } else if (seconds < 60) {
    return seconds + ' seconds ago';
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return minutes + ' minutes ago';
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return hours + ' hours ago';
  } else {
    const days = Math.floor(seconds / 86400);
    return days + ' days ago';
  }
};

export const getImagePath = p => basePath + '/file/load/' + p;
