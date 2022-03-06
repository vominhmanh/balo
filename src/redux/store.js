// import { createStore } from 'redux'
// import rootReducer from './reducer.js'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store;
import { configureStore, createStore } from '@reduxjs/toolkit'
import rootReducer from './reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import { activePlacesSlice } from './Createtour/activePlaceSlice.js';
import { detailTabSlice } from './Createtour/detailTabSlice.js'
const composedEnhancers = composeWithDevTools()

const store = configureStore({
    reducer: {
        activePlaces: activePlacesSlice.reducer,
        detailTab: detailTabSlice.reducer,
    }
})

export default store;
