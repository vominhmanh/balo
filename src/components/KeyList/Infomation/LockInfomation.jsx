import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import lockApi from '../../../api/lockApi'
import LockAdmin from './LockAdmin'
import { useCookies } from 'react-cookie'

export default function LockInfomation(props) {
  const { lockQrCode } = useParams()
  const [cookies] = useCookies(['access_token'])
  const [lock, setLock] = useState({})

  useEffect(async () => {
    try {
      const response = await lockApi.getLockInfomation(
        cookies.access_token,
        lockQrCode,
      )
      setLock(response.data)
      console.log(lockQrCode)
    } catch (e) {}
  }, [])
  return (
    <>
      <div className="container">
        <Link to="/keylist" style={{ textDecoration: 'none' }}>
          <i className="fas fa-angle-double-left"></i> Chìa khoá của tôi
        </Link>
        <h5 className="mt-4"> {lock.lock_name} </h5>
        <div> {lock.lock_address}</div>
      </div>

      <div
        className="card mx-2 mt-4 mt-sm-0 shadow"
        style={{ backgroundColor: '#f0fff0' }}
      >
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <span className="fs-6 text-nowrap fw-bold text-success">
              &nbsp; Số lần mở khoá
            </span>
            <span>
              Không giới hạn &nbsp;
              <span className="badge bg-secondary">
                <i className="fa-solid fa-infinity"></i>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div
        className="card mx-2 mt-4 mt-sm-0 shadow"
        style={{ backgroundColor: '#e6ffe6', border: '1px dotted black' }}
      >
        <div className="card-body">
          <div className="card-title d-flex justify-content-center align-items-center">
            <img
              src={require('../../../datas/images/onkeylogo.gif')}
              alt="Hãy"
              width={'40px'}
              height={'40px'}
            />
            <span className="fs-6 text-nowrap fw-bold text-success">
              &nbsp; NHẤN ĐỂ MỞ KHOÁ
            </span>
          </div>
        </div>
      </div>
      <LockAdmin lockQrCode={lockQrCode} />
    </>
  )
}
