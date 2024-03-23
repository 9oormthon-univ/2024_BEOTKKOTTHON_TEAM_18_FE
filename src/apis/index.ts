import axios from 'axios';
import tokenStore from '@/store/tokenStore.ts';

export const baseInstance = axios.create({
  baseURL: 'http://43.201.50.230:8080/'
});

baseInstance.interceptors.request.use((config) => {
  const acToken = tokenStore.getState().token;
  if (acToken) {
    config.headers.Authorization = `Bearer ${acToken}`;
  }
  return config;
});
