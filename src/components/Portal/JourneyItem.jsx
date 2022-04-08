import React from 'react'

function JourneyItem(props, ref) {
  return (
    <div className="card mx-2 mt-4 mt-sm-0 bg-light" ref={ref}>
      <div className="card-body">
        <h5 className="card-title">
          <div className="fs-6 text-nowrap fw-bold text-primary">
            {props.journey.name}
          </div>
          <small className="fs-6">
            Chuyến đi {props.journey.journeyLength} của{' '}
            <b>{props.journey.author}</b>
          </small>
        </h5>
        <ol className="list-group list-group-numbered ">
          {props.journey.places_with_detail[0] ? (
            <li> {props.journey.places_with_detail[0].place.name}</li>
          ) : null}
          {props.journey.places_with_detail[1] ? (
            <li> {props.journey.places_with_detail[1].place.name}</li>
          ) : null}
          {props.journey.places_with_detail[2] ? (
            <li> {props.journey.places_with_detail[2].place.name}</li>
          ) : null}
          {props.journey.places_with_detail.length > 3 ? (
            <div className="text-warning">
              + {props.journey.places_with_detail.length - 3} địa điểm khác
            </div>
          ) : null}
        </ol>
        <div className="row text-center mt-3">
          <div className="col-3 text-primary">Thích</div>
          <div className="col-4 text-primary">Bình luận</div>
          <div className="col-4 text-primary">Sao chép</div>
          <div className="col-1 text-primary">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default React.forwardRef(JourneyItem)
