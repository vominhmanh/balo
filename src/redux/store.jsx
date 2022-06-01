// import { createStore } from 'redux'
// import rootReducer from './reducer.js'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)

// export default store;
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { activePlacesSlice } from './CreateJourney/activePlaceSlice.js'
import { detailTabSlice } from './CreateJourney/detailTabSlice.js'
import { detailTabActiveJourneySlice } from './CreateJourney/detailTabActiveJourneySlice.jsx'
import { activeJourneyDetailSlice } from './CreateJourney/activeJourneyDetailSlice.jsx'
import { userLogSlice } from './User/userLogSlice'

const composedEnhancers = composeWithDevTools()

const store = configureStore({
  reducer: {
    activePlaces: activePlacesSlice.reducer,
    detailTab: detailTabSlice.reducer,
    detailTabActiveJourney: detailTabActiveJourneySlice.reducer,
    activeJourneyDetail: activeJourneyDetailSlice.reducer,
    userLog: userLogSlice.reducer,
  },
})

export default store
