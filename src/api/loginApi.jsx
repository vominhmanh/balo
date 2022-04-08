import axiosAuthClient from './axiosAuthClient'
import axios from 'axios'

const loginApi = {
  login: (creditials) => {
    const url = '/login'
    return axiosAuthClient.post(url, creditials)
  },
}
export default loginApi
