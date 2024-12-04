import { store } from './../store/store';
import { getUserSession } from './../functions/userSession';
import { API_KEY, API_URL } from './../functions/environmentVariables';
import axios from 'axios';
import { signOut } from '../store/slices/user';

const sessionDetails = getUserSession();

export const appAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
  baseURL: API_URL,
});

appAxios.interceptors.request.use(
  (config) => {
    const appState = store.getState();
    const storeUserDetails = appState?.user?.user;
    // Get state to ensure it's up-to-date at the time of rendering
    const token = storeUserDetails?.token || sessionDetails?.token;

    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    // Silently return error for request configuration issues
    return Promise.reject(error);
  }
);

appAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const possibleErrors = ['Login to continue!', 'jwt expired'];

    // Handle token expiration or invalid scenarios
    if (
      err.response?.data?.errors &&
      err.response.data.errors[0].msg &&
      possibleErrors.includes(err.response.data.errors[0].msg)
    ) {
      store.dispatch(signOut());
    }

    // Instead of throwing error, return null to avoid showing "Request Unsuccessful"
    // This will suppress the UI error message
    return Promise.resolve(null);
  }
);
