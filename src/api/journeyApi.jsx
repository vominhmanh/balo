import axiosAuthClient from './axiosAuthClient'
import axiosClient from './axiosClient'
import axios from 'axios'
import { DataObject } from '@mui/icons-material'
const journeyApi = {
  get: (params) => {
    const url = `/journeys`
    return axiosAuthClient.get(url, { params })
    // params should be an object with limit and page,
    // if params is empty, means getAll
  },
  createNewJourney: (dataObject) => {
    const url = '/journeys'
    return axiosAuthClient.post(url, dataObject)
  },
}
export default journeyApi
