import React from 'react'
import ActiveJourneyList from './ActiveJourneyList/ActiveJourneyList'
import FindPlace from './FindPlace/FindPlace'
import GoogleMapsSearchBox from './GooglePlaces/GoogleMapsSearchBox'
import DetailTab from './DetailOfPlace/DetailTab'
import ActiveJourneyDetailTab from './ActiveJourneyList/ActiveJourneyDetailTab'

export default function CreateJourney(props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <FindPlace />
          {/* <GoogleMapsSearchBox /> */}
        </div>
        <div className="col-sm-8">
          <ActiveJourneyList />
        </div>
      </div>
      <DetailTab />
      <ActiveJourneyDetailTab />
    </>
  )
}
