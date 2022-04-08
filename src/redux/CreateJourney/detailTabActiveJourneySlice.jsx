import {
    createSlice
} from "@reduxjs/toolkit";

export const detailTabActiveJourneySlice = createSlice( {
    name: 'detailTabActiveJourney',
    initialState: {
        popup: false,
    },
    reducers: {
        toggleOffcanvas: ( state, action ) => {
            return action.payload
        }
    }
} )
