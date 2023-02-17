import axios from 'axios';
import { API_ROUTES } from '../../utils/constans';
export function storeTokenInLocalStorage(token) {
  localStorage.setItem('at', token);
}

export function removeTokenInLocalStorage(token) {
  localStorage.removeItem(token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('at');
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      return defaultReturnObject;
    }
    const response = await axios({
      method: 'GET',
      url: API_ROUTES.GET_USER,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { authenticated = false } = response.data;
    return authenticated ? response.data : false;
  } catch (err) {
    console.log('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}
