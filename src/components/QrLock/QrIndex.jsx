import React, { useEffect, useState } from 'react'
import QrCamera from './QrCamera'
import LockController from './LockController'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function QrIndex(props) {
  const [lockCode, setLockCode] = useState(undefined)
  const { paramLockCode } = useParams()
  const user = useSelector((state) => state.userLog.user)

  const callbackfn = (data) => {
    setLockCode(data)
  }

  const handleCancel = () => {
    setLockCode(undefined)
  }

  useEffect(async () => {
    try {
      setTimeout(() => callbackfn(paramLockCode), 1000)
    } catch (e) {}
  }, [])

  return (
    <>
      <div className="container mt-5">
        {user ? (
          <div>
            Xin chào, <b>{user.name}</b>
          </div>
        ) : (
          <div>
            <Link to="/login">Đăng nhập</Link> để mở khoá nhanh hơn.
          </div>
        )}
      </div>
      <br />
      {props.accessedByLink ? (
        <div className="">
          <Link to="/qrlock">Mở camera</Link>
        </div>
      ) : (
        <QrCamera parentCallback={callbackfn} />
      )}
      <LockController accessedByLink={props.accessedByLink} lockCode={lockCode} onCancel={handleCancel} />
    </>
  )
}
