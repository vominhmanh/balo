import React from 'react'
import ActiveTourList from './ActiveTourList/ActiveTourList'
import FindPlace from './FindPlace/FindPlace'
import GoogleMapsSearchBox from './GooglePlaces/GoogleMapsSearchBox'
import DetailTab from './DetailOfPlace/DetailTab'

export default function CreateTour(props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <FindPlace />
          {/* <GoogleMapsSearchBox /> */}
        </div>
        <div className="col-sm-8">
          <ActiveTourList />
        </div>
      </div>
      <DetailTab />
    </>
  )
}
