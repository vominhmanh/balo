import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { activePlacesSlice } from '../../../redux/CreateJourney/activePlaceSlice'
import DetailTab from '../DetailOfPlace/DetailTab'
import { detailTabSlice } from '../../../redux/CreateJourney/detailTabSlice'

export function ActivePlaceItem(props) {
  const dispatch = useDispatch()

  const showDetailHandler = (e) => {
    dispatch(
      detailTabSlice.actions.toggleOffcanvas({
        popup: true,
        placeIndex: props.order,
      }),
    )
  }

  const removeAPlaceHandler = (e) => {
    dispatch(activePlacesSlice.actions.removePlaceFromList(props.order))
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{props.placeWithInfo.place.name}</div>
          <div className="">
            {props.placeWithInfo.startAt} - {props.placeWithInfo.finishAt}
            {trans[props.placeWithInfo.transport]}
          </div>
          <div className="">{props.placeWithInfo.description}</div>
        </div>
        <span className="badge bg-primary rounded-pill">{props.tag}</span>

        <div className="d-flex align-items-center" style={{ height: '50px' }}>
          <i
            className="fa-solid fa-pencil text-primary"
            onClick={showDetailHandler}
          ></i>
          &emsp;
          <i
            className="fa-solid fa-circle-xmark text-danger"
            onClick={removeAPlaceHandler}
          ></i>
        </div>
      </li>
    </>
  )
}

const trans = {
  '': '',
  'o-to': ' - bằng Ô tô',
  'xe-may': ' -  bằng Xe máy',
  taxi: ' -  bằng Taxi',
  'xe-buyt': ' -  bằng Xe buýt',
  'xe-om': ' - bằng Xe ôm',
  'may-bay': ' - bằng Máy bay',
  'tau-hoa': ' - bằng Tàu hoả',
  'xe-khach': ' - bằng Xe khách',
  other: ' - bằng phương tiện khác',
}
