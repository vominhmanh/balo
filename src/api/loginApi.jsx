import axiosClient from './axiosClient'
import axios from 'axios'

const loginApi = {
  login: (creditials) => {
    const url = 'auth/login'
    return axiosClient.post(url, creditials)
  },
  getUser: (accessToken) => {
      const url = 'auth/user'
      return axiosClient.get(url, {
        headers: {
          Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
        },
      })
  },
  register: (creditials) => {
      const url = 'auth/register'
      return axiosClient.post(url, creditials)
  }
}
export default loginApi
