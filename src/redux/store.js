// import { createStore } from 'redux'
// import rootReducer from './reducer.js'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store;
import { configureStore, createStore } from '@reduxjs/toolkit'
import rootReducer from './reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import { activePlacesSlice } from './CreateJourney/activePlaceSlice.js';
import { detailTabSlice } from './CreateJourney/detailTabSlice.js'
import { detailTabActiveJourneySlice } from './CreateJourney/detailTabActiveJourneySlice.jsx';
import { activeJourneyDetailSlice } from './CreateJourney/activeJourneyDetailSlice.jsx';
const composedEnhancers = composeWithDevTools()

const store = configureStore({
    reducer: {
        activePlaces: activePlacesSlice.reducer,
        detailTab: detailTabSlice.reducer,
        detailTabActiveJourney: detailTabActiveJourneySlice.reducer,
        activeJourneyDetail: activeJourneyDetailSlice.reducer,
    }
})

export default store;
