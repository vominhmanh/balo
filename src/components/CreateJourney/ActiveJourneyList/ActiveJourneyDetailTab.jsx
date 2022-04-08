import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { detailTabActiveJourneySlice } from '../../../redux/CreateJourney/detailTabActiveJourneySlice'
import { activeJourneyDetailSlice } from '../../../redux/CreateJourney/activeJourneyDetailSlice'

export default function ActiveJourneyDetailTab(props) {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.detailTabActiveJourney.popup)

  const activeJourneyDetail = useSelector((state) => {
    return state.activeJourneyDetail
  })
  const [state, setState] = useState({
    name: activeJourneyDetail.name,
    cost: '',
    time: '',
    description: '',
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleShow = (e) => {}

  const handleClose = (e) => {
    dispatch(
      detailTabActiveJourneySlice.actions.toggleOffcanvas({
        popup: false,
      }),
    )
    dispatch(
      activeJourneyDetailSlice.actions.editJourneyDetail({
        name: state.name,
        cost: '',
        length: '',
        description: '',
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
          <Offcanvas.Title>{'Chi tiết chuyến đi'}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="row g-3" name="detail-form" id="detail-form">
            <div className="col-12">
              <label htmlFor="validationCustom01" className="form-label">
                Tên chuyến đi
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
                defaultValue={activeJourneyDetail.name}
              />
            </div>
            <div className="col-12">
              <label htmlFor="validationCustom02" className="form-label">
                Chi phí
              </label>
              <input
                type="number"
                name="cost"
                className="form-control"
                onChange={handleChange}
                defaultValue={''}
              />
            </div>

            <div className="col-6">
              <label htmlFor="validationCustom03" className="form-label">
                Thời gian
              </label>
              <input
                type="text"
                name="day"
                className="form-control"
                placeholder="x ngày"
                onChange={handleChange}
                defaultValue={''}
              />
            </div>
            <div className="col-6">
              <label htmlFor="validationCustom03" className="form-label">
                &nbsp;
              </label>
              <input
                type="text"
                name="night"
                className="form-control"
                placeholder="y đêm"
                onChange={handleChange}
                defaultValue={''}
              />
            </div>
            <div className="col-12">
              <label htmlFor="validationCustom03" className="form-label">
                Mô tả
              </label>
              <textarea
                name="description"
                rows="5"
                className="form-control"
                onChange={handleChange}
                defaultValue={''}
              ></textarea>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
