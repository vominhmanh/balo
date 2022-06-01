import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import lockApi from '../../api/lockApi'
import QrScannerNewLock from './QrScannerNewLock'
import EnterPrivateCode from './EnterPrivateCode'

export default function AddNewLock(props) {
  const user = useSelector((state) => state.userLog.user)
  const [openQR, setOpenQR] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [lock, setlock] = useState({})
  const [lookingUpError, setLookingUpError] = useState('')
  const navigate = useNavigate()
  const [qrCode, setQrCode] = useState('')
  const [typingQrCode, setTypingQrCode] = useState('')

  useEffect(() => {
    if (!user) {
      navigate('/login?next=/keylist/addnewlock')
    }
  }, [])



  const handleSubmit = async (event) => {
    event.preventDefault()
    setOpenModal((old) => !old)
  }

  const handleQrBtnClick = () => {
    console.log('Click')
    setOpenQR((old) => !old)
  }

  useEffect(async () => {
    if (qrCode) {
      try {
        const response = await lockApi.getlock(qrCode)
        setlock(response.data)
        setLookingUpError(null)
      } catch (e) {
        setLookingUpError(e.response.data.error)
        setlock({})
      }
    }
  }, [qrCode])

  return (
    <>
      <div className="container">
        <Link to="/keylist" style={{ textDecoration: 'none' }}>
          <i class="fas fa-angle-double-left"></i> Chìa khoá của tôi
        </Link>
        <h5 className="my-4"> Thêm thiết bị mới </h5>
      </div>
      <div className="container">
        <form action="#" className="" onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            {' '}
            <label className="form-control-placeholder" htmlFor="username">
              Mã QR thiết bị:
            </label>
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  name="qrCode"
                  className="form-control"
                  value={typingQrCode}
                  onChange={(e) => {
                    setTypingQrCode(e.target.value)
                  }}
                  onBlur={(e) => {
                    setQrCode(typingQrCode)
                  }}
                  required
                />
              </div>
              <div className="col-2">
                <i
                  className="fa-solid fa-qrcode"
                  onClick={handleQrBtnClick}
                  style={{ fontSize: '40px' }}
                ></i>
              </div>
            </div>
          </div>
          {lock.lock_device_name && (
            <>
              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="username">
                  Model thiết bị:
                </label>
                <b>{lock.lock_device_name}</b>
              </div>

              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="username">
                  Số serial thiết bị:
                </label>
                <b>{lock.lock_serial}</b>
              </div>

              <div className="form-group mt-3">
                <label className="form-control-placeholder" htmlFor="username">
                  Nhà sản xuất:
                </label>
                <b>{lock.lock_manufacturer}</b>
              </div>
            </>
          )}
          {lookingUpError && (
            <div className="form-group mt-3">
              <label
                className="form-control-placeholder text-danger"
                htmlFor="username"
              >
                {lookingUpError}
              </label>
            </div>
          )}

          <div className="bg-warning border-round mt-3"></div>
          <div className="form-group mt-5">
            <button
              type="submit"
              className="form-control btn btn-primary rounded submit px-3"
              disabled={!lock.lock_device_name && lookingUpError}
            >
              Thêm thiết bị này
            </button>
          </div>
        </form>
      </div>

      <QrScannerNewLock
        open={openQR}
        toggleOffcanvas={() => setOpenQR((old) => !old)}
        getQrCode={(qrCode) => {
          setTypingQrCode(qrCode)
          setQrCode(qrCode)
        }}
      />

      <EnterPrivateCode
        open={openModal}
        toggleModal={() => setOpenModal((old) => !old)}
        qrCode={qrCode}
      />
    </>
  )
}
