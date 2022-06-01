import React, { useState, useEffect } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import lockApi from '../../api/lockApi'
import Authorization from './Authorization'
import { useSelector } from 'react-redux'

export default function LockController(props) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [cookies] = useCookies(['access_token'])
  const [lockInformation, setLockInformation] = useState({
    lock_name: '',
    lock_address: '',
  })
  const user = useSelector((state) => state.userLog.user)

  const [lockStatus, setLockStatus] = useState([])

  const sendUnlockRequest = async (_lockCode) => {
    try {
      setLockStatus([...lockStatus, 'Gửi lệnh mở cửa'])
      const response = await lockApi.unlock(_lockCode, cookies.access_token)
      console.log(response)
    } catch (e) {
      console.log('Mã lỗi', e.response.status)
      if (e.response.status === 401) {
        setLockStatus([...lockStatus])
      }
    }
  }

  const getLockInformation = async (_lockCode) => {
    try {
      console.log('_lockCode', _lockCode)
      setLockInformation(await lockApi.getLock(_lockCode))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    props.lockCode && setShow(true)
  }, [props.lockCode])

  const handleChange = (e) => {}

  const handleShow = (e) => {
    getLockInformation(props.lockCode)
    !props.accessedByLink && sendUnlockRequest(props.lockCode)
  }

  const handleClose = (e) => {
    setShow(false)
    setLockInformation({
      lock_name: '',
      lock_address: '',
    })
    setLockStatus([])
    props.onCancel()
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
        id="offcanvasLockController"
        show={show}
        onShow={handleShow}
        backdrop={true}
        placement="bottom"
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mở khoá bằng QR Code</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="fw-bold">THÔNG TIN THIẾT BỊ</div>
          <div className="">
            <b>Tên thiết bị:</b> {lockInformation.lock_name}
          </div>
          <br></br>
          {user ? (
            <div>
              {props.accessedByLink && lockStatus == 0 ? (
                <div
                  className="btn btn-primary"
                  onClick={() => sendUnlockRequest(props.lockCode)}
                >
                  Bấm vào đây để mở khoá
                </div>
              ) : (
                ''
              )}
              {lockStatus.length > 0 && (
                <div>
                  <div className="fw-bold">TRẠNG THÁI</div>
                  <div className="">
                    {lockStatus.map((status, index) => {
                      return (
                        <div key={index + 1}>
                          {index + 1}. {status}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Authorization />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
