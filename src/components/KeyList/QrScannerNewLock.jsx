import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

import QrCamera from '../QrLock/QrCamera'

export default function QrScannerNewLock(props) {
  
  //const show = useSelector((state) => state.detailTabActiveJourney.popup)
  const [show, setShow] = useState(false)

  const handleShow = (e) => {}

  const handleClose = (e) => {
    setShow(false)
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
        show={props.open}
        onShow={handleShow}
        backdrop={true}
        placement="bottom"
        onHide={props.toggleOffcanvas}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{'Quét mã QR thiết bị'}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <QrCamera
            parentCallback={(qrCode) => {
              props.getQrCode(qrCode)
              props.toggleOffcanvas()
            }}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
