import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const activeJourneyDetailSlice = createSlice({
  name: 'activeJourneyDetail',
  initialState: {
    name: 'Chuyến đi của tôi',
    cost: '',
    length: '',
    description: '',
  },
  reducers: {
    editJourneyDetail: (state, action) => {
      return action.payload
    },
  },
})
