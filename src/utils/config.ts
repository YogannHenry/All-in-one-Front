import axios from 'axios';

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
    baseURL: 'http://localhost:3000/api', // process.env.REACT_APP_API_PATH,
    headers,
    timeout: 10000,
  });
};

//http://heyo5082.odns.fr/api