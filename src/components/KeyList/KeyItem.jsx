import React from 'react'
import { Link } from 'react-router-dom'

export default function KeyItem(props) {
  return (
    <>
      <div
        className="card mx-2 mt-4 mt-sm-0 shadow"
        style={{ backgroundColor: '#f0fff0' }}
      >
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <Link
              className="fs-6 text-nowrap fw-bold text-success"
              to={'/lockinfo/' + props.lock_qrcode}
            >
              {props.lock_name}
            </Link>
            <span>
              <span
                className="badge bg-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
              >
                {!props.infinity && <i className="fa-solid fa-infinity"></i>}
              </span>
              &nbsp;
              {props.lock_status == 1 && (
                <span className="badge bg-success">ON</span>
              )}
              {props.lock_status == 0 && (
                <span className="badge bg-danger">OFF</span>
              )}
              {props.lock_status == -1 && (
                <span className="badge bg-warning">?</span>
              )}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <small className="">{props.lock_address}</small>
            <a
              className="badge bg-light text-dark"
              data-bs-toggle="collapse"
              href={`#collapse_${props.lock_qrcode}`}
              role="button"
              aria-expanded="false"
              aria-controls={`collapse_${props.lock_qrcode}`}
            >
              <i className="fas fa-caret-down"></i>
            </a>
          </div>
          <div
            className="collapse shadow-sm mt-2"
            id={`collapse_${props.lock_qrcode}`}
          >
            <div className="card card-body py-1">
              <div className="row">
                <div className="col-9">
                  <span className="badge bg-warning text-dark">
                    <i className="fa-solid fa-lock-open"></i>
                    &nbsp;
                    <small>Mở</small>
                  </span>
                  &emsp;
                  <span className="badge bg-primary">
                    <i className="fas fa-user-friends"></i>
                    &nbsp;
                    <small>Khách</small>
                  </span>
                  &emsp;
                  <span className="badge bg-danger">
                    <i className="fa-solid fa-power-off"></i>
                    &nbsp;
                    <small>OFF</small>
                  </span>
                </div>

                <div className="col-3 text-right">
                  <span className="badge bg-light text-dark">
                    <i className="fa-solid fa-gear"></i>
                    &nbsp;
                    <small>Cài đặt</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
