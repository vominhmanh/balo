import axiosClient from './axiosClient'
import axios from 'axios'
import { DataObject } from '@mui/icons-material'

const lockApi = {
  getLock: (params) => {
    const url = `/get-lock/` + params
    return axiosClient.get(url)
  },
  unlock: (dataObject, accessToken) => {
    const url = '/unlock'
    return axiosClient.post(
      url,
      { lock_code: dataObject },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
        },
      },
    )
  },
  setLockOwner: (dataObject, accessToken) => {
    const url = '/setlockowner'
    return axiosClient.post(url, dataObject, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
      },
    })
  },
  getMyLockList: (accessToken) => {
    const url = '/getmylocklist'
    return axiosClient.get(url, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
      },
    })
  },
  getMemberLockList: (accessToken) => {
    const url = '/getmemberlocklist'
    return axiosClient.get(url, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
      },
    })
  },
  getGuessLockList: (accessToken) => {
    const url = '/getguesslocklist'
    return axiosClient.get(url, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
      },
    })
  },
  getLockInfomation: (accessToken, lock_qrcode) => {
    const url = '/lockinfo/' + lock_qrcode
    return axiosClient.get(url, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
      },
    })
  },
  setMemberPermission: (
    accessToken,
    lock_qrcode,
    member_name,
    member_phonenumber,
    valid_time,
  ) => {
    const url = '/setmemberpermission/' + lock_qrcode
    return axiosClient.post(
      url,
      {
        member_name: member_name,
        phonenumber: member_phonenumber,
        valid_time: valid_time,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
        },
      },
    )
  },
  setGuessPermission: (
    accessToken,
    lock_qrcode,
    member_name,
    member_phonenumber,
    total_opening_times,
    valid_time,
  ) => {
    const url = '/setguesspermission/' + lock_qrcode
    return axiosClient.post(
      url,
      {
        member_name: member_name,
        phonenumber: member_phonenumber,
        total_opening_times: total_opening_times,
        valid_time: valid_time,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + accessToken, //the token is a variable which holds the token
        },
      },
    )
  },
}

export default lockApi
