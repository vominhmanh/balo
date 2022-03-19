import axiosClient from './axiosClient'
import axios from 'axios'
const journeyApi = {
  get: (params) => {
    const url = `/journeys`
    return axiosClient.get(url, { params })
    // params should be an object with limit and page,
    // if params is empty, means getAll
  },
}
export default journeyApi
