import React from 'react'

export default function ProfessionalJouneyItem(props) {
  return (
    <div className="card mx-2 mt-4 mt-sm-0 bg-light">
      <div className="card-body">
        <h5 className="card-title">
          <div className="fs-6 text-nowrap fw-bold text-primary">
            Hà Nội - Ninh Bình
          </div>
          <small className="fs-6">
            <i class="fa-solid fa-star text-danger"></i> &nbsp; Chuyến đi 5N-6Đ
            của <b className="text-danger">Vietravel</b>
          </small>
        </h5>
        <ol className="list-group list-group-numbered ">
          <li>Tràng An</li>
          <li>Chùa Bái Đính</li>
          <li>Tam Cốc Bích Động</li>
          <div className="text-warning">+ 5 địa điểm khác</div>
        </ol>
        <div className="mt-3">
          <div className="fw-bold">1.490.000đ</div>
          <div>Có hướng dẫn viên, xe đưa đón.</div>
        </div>
        <div className="row text-center mt-3">
          <div className="col-3 text-primary">Thích</div>
          <div className="col-4 text-primary">Bình luận</div>
          <div className="col-4 text-primary">Đăng ký</div>
          <div className="col-1 text-primary">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
