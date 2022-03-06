import React from 'react'
import { ActivePlaceItem } from './ActivePlaceItem'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

export default function ActiveTourList(props) {
  const activePlacesWithInfo = useSelector((state) => state.activePlaces)
  console.log(activePlacesWithInfo)
  return (
    <div className="card mt-5 mt-sm-0">
      <div className="card-body">
        <h5 className="card-title"> Tour của tôi </h5>
        <ol className="list-group list-group-numbered">
          {activePlacesWithInfo.map((activePlaceWithInfo, index) => {
            return (
              <ActivePlaceItem
                placeWithInfo={activePlaceWithInfo}
                key={index}
                order={index}
              />
            )
          })}
        </ol>
      </div>
    </div>
  )
}
