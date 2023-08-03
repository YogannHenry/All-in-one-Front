
import axios from 'axios'


export const getAPI = function(){
  const token = localStorage.getItem('token') 
  const headers = {}

  if(token){
      headers.Authorization = `${token}`
  }

  return axios.create({
      baseURL: "http://localhost:3002/api",
      headers
  })
}