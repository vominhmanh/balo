import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const userLogSlice = createSlice({
  name: 'UserLog',
  initialState: {
    access_token: cookies.get('access_token'),
    user: null,
  },
  reducers: {
    login: (state, action) => {
      return action.payload
    },
    logout: (state, action) => {
      return { access_token: cookies.get('access_token'), user: null }
    },
  },
})
