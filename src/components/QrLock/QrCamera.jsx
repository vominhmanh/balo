import React, { useState, useRef } from 'react'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'
import { useTorchLight } from '@blackbox-vision/use-torch-light'

export default function QrCamera(props) {
  const streamRef = useRef(null)
  //const [mode, setMode] = useState('environment')
  const [on, toggle] = useTorchLight(streamRef.current)
  const setRef = ({ stream }) => (streamRef.current = stream)
  const handleResult = (result) => {
    if (result?.text) {
      const lockCodeStartAt = (result?.text).indexOf('get-lock/') + 11
      const lockCode = (result?.text).substring(lockCodeStartAt)
      props.parentCallback(lockCode)
    }
  }
  return (
    <>
      <QrReader
        onLoad={setRef}
        onResult={(result, error) => {
          if (!!result) {
            handleResult(result)
          }

          if (!!error) {
          }
        }}
        constraints={{ facingMode: 'environment' }}
        scanDelay={500}
      />
      <div className="container">
        <div width="90%">
          <div className="d-flex justify-content-between">
            <div className="btn btn-primary" onClick={toggle}>
              <i className="fa-solid fa-lightbulb"></i> {on ? 'ON' : 'OFF'}
            </div>
            <div className="btn btn-primary">
              <i className="fa-solid fa-camera-rotate"></i>
            </div>
          </div>
          <br />
          <div className="">
            <b>Hướng dẫn: </b> Di chuyển camera vào mã QR trên thiết bị.
          </div>
        </div>
      </div>
    </>
  )
}
