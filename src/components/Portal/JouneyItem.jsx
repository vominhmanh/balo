import React from 'react'

export default function JouneyItem(props) {
  return (
    <div className="card mx-2 mt-4 mt-sm-0 bg-light">
      <div className="card-body">
        <h5 className="card-title">
          <div className="fs-6 text-nowrap fw-bold text-primary">
            Hà Nội - Hà Giang - Quảng Ninh
          </div>
          <small className="fs-6">
            Chuyến đi 5N-6Đ của <b>Giang Rosy</b>
          </small>
        </h5>
        <ol className="list-group list-group-numbered ">
          <li>Chùa Một Cột</li>
          <li>Văn Miếu Quốc Tử Giám</li>
          <li>Hồ Tây</li>
          <div className="text-warning">+ 7 địa điểm khác</div>
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
