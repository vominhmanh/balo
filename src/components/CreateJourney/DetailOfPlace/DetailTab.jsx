import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { activePlacesSlice } from '../../../redux/CreateJourney/activePlaceSlice'
import { detailTabSlice } from '../../../redux/CreateJourney/detailTabSlice'

export default function DetailTab(props) {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.detailTab.popup)

  const placeIndex = useSelector((state) => state.detailTab.placeIndex)
  let placeWithInfo = useSelector(
    (state) => state.activePlaces[placeIndex ?? state.activePlaces.length - 1],
  )

  if (placeWithInfo == undefined) {
    placeWithInfo = {
      place: {
        id: '',
        name: 'Địa điểm',
        address: '',
      },
      startAt: '',
      finishAt: '',
      description: '',
      transport: '',
    }
  }
  console.log('place with info', placeWithInfo)
  const [state, setState] = useState({
    startAt: placeWithInfo.startAt,
    finishAt: placeWithInfo.finishAt,
    description: placeWithInfo.description,
    transport: placeWithInfo.transport,
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleShow = (e) => {
    setState({
      startAt: placeWithInfo.startAt,
      finishAt: placeWithInfo.finishAt,
      description: placeWithInfo.description,
      transport: placeWithInfo.transport,
    })
  }

  const handleClose = (e) => {
    dispatch(
      activePlacesSlice.actions.editPlaceInfo({
        placeIndex: placeIndex,
        newPlaceWithInfo: {
          place: placeWithInfo.place,
          startAt: state.startAt,
          finishAt: state.finishAt,
          description: state.description,
          transport: state.transport,
        },
      }),
    )
    dispatch(
      detailTabSlice.actions.toggleOffcanvas({
        popup: false,
        placeIndex: null,
      }),
    )
  }

  return (
    <>
      <style type="text/css">
        {`
    .offcanvas {
     height: auto
    }
    `}
      </style>

      <Offcanvas
        show={show}
        onShow={handleShow}
        backdrop={true}
        placement="bottom"
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{placeWithInfo.place.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="row g-3" name="detail-form" id="detail-form">
            <div className="col-4">
              <label htmlFor="validationCustom01" className="form-label">
                Đến nơi lúc
              </label>
              <input
                type="time"
                name="startAt"
                className="form-control"
                onChange={handleChange}
                defaultValue={placeWithInfo.startAt}
              />
            </div>
            <div className="col-4">
              <label htmlFor="validationCustom02" className="form-label">
                Rời đi lúc
              </label>
              <input
                type="time"
                name="finishAt"
                className="form-control"
                onChange={handleChange}
                defaultValue={placeWithInfo.finishAt}
              />
            </div>
            <div className="col-4">
              <label htmlFor="validationCustomUsername" className="form-label">
                Phương tiện
              </label>
              <div className="input-group has-validation">
                <select
                  name="transport"
                  className="form-control"
                  onChange={handleChange}
                  defaultValue={placeWithInfo.transport ?? undefined}
                >
                  <option value=""></option>
                  <option value="o-to">Ô tô</option>
                  <option value="xe-may">Xe máy</option>
                  <option value="taxi">Taxi</option>
                  <option value="xe-buyt">Xe buýt</option>
                  <option value="xe-om">Xe ôm</option>
                  <option value="may-bay">Máy bay</option>
                  <option value="tau-hoa">Tàu hoả</option>
                  <option value="xe-khach">Xe khách</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="validationCustom03" className="form-label">
                Thông tin thêm
              </label>
              <input
                type="text"
                name="description"
                className="form-control"
                onChange={handleChange}
                defaultValue={placeWithInfo.description}
              />
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
