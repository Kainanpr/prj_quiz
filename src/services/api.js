/* eslint-disable no-param-reassign */
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import environmentVariables from '../config/env';

const api = axios.create({
  baseURL: environmentVariables.api,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;
