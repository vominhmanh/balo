import React from 'react'

export default function ErrorMessage(props) {
  return (
    <>
      <div
        className="card mx-2 mt-4 mt-sm-0"
        style={{ backgroundColor: '#ffcccb' }}
      >
        <div className="card-body">
          <div className="text-nowrap fw-bold text-danger">
            Có lỗi xấy ra: {props.title}
          </div>
          <small className="">{props.error}</small>
        </div>
      </div>
    </>
  )
}
