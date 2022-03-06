import {
    createSlice
} from "@reduxjs/toolkit";

export const detailTabSlice = createSlice( {
    name: 'detailTab',
    initialState: {
        popup: false,
        placeIndex: null,
    },
    reducers: {
        toggleOffcanvas: ( state, action ) => {
            return action.payload
        }
    }
} )
