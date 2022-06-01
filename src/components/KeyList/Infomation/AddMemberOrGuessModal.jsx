import React, { useState } from 'react'
import {
  Form,
  Modal,
  Button,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from 'react-bootstrap'
import lockApi from '../../../api/lockApi'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import ErrorMessage from '../../Notification/ErrorMessage'

export default function AddMemberOrGuessModal(props) {
  const [submitError, setSubmitError] = useState('')
  const [guessOrMember, setGuessOrMember] = useState('')
  const [cookies] = useCookies(['access_token'])
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (guessOrMember === 'member') {
        const response = await lockApi.setMemberPermission(
          cookies['access_token'],
          props.lockQrCode,
          e.currentTarget.fullname.value,
          e.currentTarget.phonenumber.value,
          e.currentTarget.valid_time.value,
        )
      }
      if (guessOrMember === 'guess') {
        const response = await lockApi.setGuessPermission(
          cookies['access_token'],
          props.lockQrCode,
          e.currentTarget.fullname.value,
          e.currentTarget.phonenumber.value,
          e.currentTarget.total_opening_times,
          e.currentTarget.valid_time.value,
        )
      }

      navigate('/lockinfo/' + props.lockQrCode)
    } catch (error) {
      setSubmitError(error.response.data.error)
    }
  }

  return (
    <>
      <Modal
        show={props.isOpen}
        onHide={props.toggleOpen}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className="mb-3 text-center"
              controlId="exampleForm.ControlInput3"
            >
              <Row>
                <Col>
                  <ButtonGroup width={'100%'}>
                    <ToggleButton
                      id={`radio-1`}
                      type="radio"
                      variant={'outline-success'}
                      name="guessormember"
                      value={'member'}
                      checked={guessOrMember === 'member'}
                      onChange={(e) => {
                        setGuessOrMember(e.currentTarget.value)
                      }}
                      required
                    >
                      Thành viên
                    </ToggleButton>
                    <ToggleButton
                      id={`radio-2`}
                      type="radio"
                      variant={'outline-success'}
                      name="guessormember"
                      value={'guess'}
                      checked={guessOrMember === 'guess'}
                      onChange={(e) => {
                        setGuessOrMember(e.currentTarget.value)
                      }}
                      required
                    >
                      Khách
                    </ToggleButton>
                  </ButtonGroup>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col xs={4}>
                  <Form.Label>Tên</Form.Label>
                </Col>
                <Col xs={8}>
                  <Form.Control
                    type="text"
                    name="fullname"
                    required
                    autoFocus
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Row>
                <Col xs={4}>
                  <Form.Label>Số điện thoại</Form.Label>
                </Col>
                <Col xs={8}>
                  <Form.Control
                    type="number"
                    placeholder="0123456789"
                    name="phonenumber"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                    autoFocus
                  />
                </Col>
              </Row>
            </Form.Group>
            {guessOrMember != '' && (
              <Form.Group className="mb-3">
                <Row>
                  <Col xs={2} style={{ fontSize: 13 }}>
                    Lần mở
                  </Col>
                  {guessOrMember == 'guess' ? (
                    <Col xs={3}>
                      <Form.Control
                        type="number"
                        defaultValue={2}
                        name="total_opening_times"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        required
                        autoFocus
                      />
                    </Col>
                  ) : (
                    <Col xs={3} style={{ fontSize: 13, fontWeight: 'bold' }}>
                      Không giới hạn
                    </Col>
                  )}
                  <Col xs={2} style={{ fontSize: 13 }}>
                    Hiệu lực
                  </Col>
                  {guessOrMember == 'member' ? (
                    <Col xs={5}>
                      <Form.Select
                        name="valid_time"
                        defaultValue={'-1'}
                        aria-label="Default select example"
                      >
                        <option value="604800">1 tuần</option>
                        <option value="2592000">1 tháng </option>
                        <option value="7776000">3 tháng </option>
                        <option value="-1">Không giới hạn </option>
                      </Form.Select>
                    </Col>
                  ) : (
                    <Col xs={5}>
                      <Form.Select
                        name="valid_time"
                        defaultValue={'86400'}
                        aria-label="Default select example"
                      >
                        <option value="86400">24 giờ</option>
                        <option value="172800">48 giờ</option>
                        <option value="604800">1 tuần </option>
                        <option value="2592000">1 tháng </option>
                        <option value="-1">Không giới hạn</option>
                      </Form.Select>
                    </Col>
                  )}
                </Row>
              </Form.Group>
            )}

            {submitError && <ErrorMessage error={submitError} />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.toggleOpen}>
              Đóng
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
