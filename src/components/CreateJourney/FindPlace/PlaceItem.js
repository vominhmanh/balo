import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { activePlacesSlice } from '../../../redux/CreateJourney/activePlaceSlice'
import { detailTabSlice } from '../../../redux/CreateJourney/detailTabSlice'

export default function PlaceItem(props) {
  const dispatch = useDispatch()
  const clickHandler = (e) => {
    dispatch(
      activePlacesSlice.actions.addPlaceToJourneyList({
        place: props.place,
        startAt: undefined,
        finishAt: undefined,
        description: undefined,
        transport: undefined,
      }),
    )
    dispatch(
      detailTabSlice.actions.toggleOffcanvas({
        popup: true,
        placeId: null,
      }),
    )
  }

  return (
    <button
      type="button"
      className="list-group-item d-flex justify-content-between list-group-item-action"
      aria-current="true"
    >
      {props.place.name}
      <i className="fa-solid fa-plus" onClick={clickHandler} />
    </button>
  )
}
