import axios from 'axios';

import { logout } from './services/user';

const UNAUTH_ERROR = 401;

const $api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const interceptor = ({ dispatch }) => {
  $api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
  });

  $api.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (error.response.status === UNAUTH_ERROR) {
        dispatch(logout());
      }

      return Promise.reject(error);
    }
  );
};
export default $api;
