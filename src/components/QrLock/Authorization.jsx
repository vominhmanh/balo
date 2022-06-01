import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Authorization(props) {
  const [enteringOTPComponent, setEnteringOTPComponent] = useState(false)

  const TemporaryLogin = () => {
    return (
      <form action="#" className="signin-form">
        <div className="row mt-3">
          <div className="col-7">
            <input
              placeholder="Số điện thoại"
              type="text"
              //onChange={handlePhonenumberChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-5">
            <button
              type="submit"
              className="form-control btn btn-primary rounded submit px-3"
              onClick={() => {
                setEnteringOTPComponent(true)
              }}
            >
              Tiếp tục
            </button>
          </div>
        </div>
        <br />
        <div className="form-group d-md-flex">
          <div className="fs-small text-md-right">
            <small>
              Bạn đã có tài khoản?, đến trang <Link to="/login">đăng nhập</Link>
            </small>
          </div>
        </div>
        <br />
        <br />
      </form>
    )
  }

  const ConfirmLogin = () => {
    return (
      <form action="#" className="signin-form">
        <div className="row mt-3">
          <div className="col-7">
            <input
              placeholder="Mã OTP"
              type="text"
              //onChange={handlePhonenumberChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-5">
            <button
              type="submit"
              className="form-control btn btn-success rounded submit px-3"
            >
              Mở khoá
            </button>
          </div>
        </div>
        <div className="form-group d-md-flex">
          <div className="fs-small text-md-right">
            <small>
              <a href="#">Gửi lại OTP</a>
            </small>
          </div>
        </div>
        <br />
        <div className="form-group d-md-flex">
          <div className="fs-small text-md-right">
            Vui lòng nhập OTP gửi đến <b>(+84) 333247242</b>{' '}
            <a
              href="#"
              onClick={() => {
                setEnteringOTPComponent(false)
              }}
            >
              Đổi SĐT
            </a>
          </div>
        </div>
      </form>
    )
  }

  return (
    <>
      <div className="fw-bold">ĐĂNG NHẬP ĐỂ MỞ KHOÁ</div>
      {!enteringOTPComponent && <TemporaryLogin />}
      {enteringOTPComponent && <ConfirmLogin />}
    </>
  )
}
