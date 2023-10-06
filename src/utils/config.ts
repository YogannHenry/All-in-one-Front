import axios from 'axios';
import API_URL
 from '../API_URL';
export const getToken = function () {
  return localStorage.getItem('token');
};

export const getAPI = function () {
  const token = getToken();
  const headers: { [key: string]: string } = {};

  if (token) {
    headers.Authorization = `${token}`;
  }
  return axios.create({
    baseURL: API_URL, // process.env.REACT_APP_API_PATH,
    headers,
    timeout: 10000,
  });
};

//hhttps://api.all-in-1.fr/api         http://localhost:3000/api                                                                            