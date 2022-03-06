import {
    createSlice
} from "@reduxjs/toolkit";

export const activePlacesSlice = createSlice( {
    name: 'activePlaces',
    initialState: [],
    reducers: {
        addPlaceToTourList: ( state, action ) => {
            state.push( action.payload )
        },
        removePlaceFromList: ( state, action ) => {
            state.splice( action.payload, 1 )
        },
        editPlaceInfo: ( state, action ) => {
            if ( action.payload.placeIndex == null ) {
                state.splice( state.length - 1, 1, action.payload.newPlaceWithInfo )
            } else {
                state.splice( action.payload.placeIndex, 1, action.payload.newPlaceWithInfo )
            }


        }
    },

} )
