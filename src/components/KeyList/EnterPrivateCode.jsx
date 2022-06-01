import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useCookies } from 'react-cookie'
import lockApi from '../../api/lockApi'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../Notification/ErrorMessage'

export default function EnterPrivateCode(props) {
  const [show, setShow] = useState(false)
  const [privateCode, setPrivateCode] = useState('')
  const handleClose = () => props.toggleModal()
  const handleShow = () => setShow(true)
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['access_token'])
  const [submitError, setSubmitError] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await lockApi.setlockOwner(
        {
          qrcode: props.qrCode,
          private_code: privateCode,
        },
        cookies['access_token'],
      )
      navigate('/keylist')
    } catch (error) {
      setSubmitError(error.response.data.error)
    }
  }

  return (
    <>
      <Modal
        show={props.open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Mã số bí mật</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Vui lòng nhập mã số bí mật được in trong thẻ thông tin để kích
                hoạt
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="123456789012"
                onChange={(e) => {
                  setPrivateCode(e.target.value)
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <small>
                * Lưu ý: Chủ sở hữu cũ sẽ bị xoá khi bạn kích hoạt thành công
              </small>
            </Form.Group>
            {submitError && <ErrorMessage error={submitError} />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Tiến hành
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
