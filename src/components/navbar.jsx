import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import loginApi from '../api/loginApi'
import { useSelector } from 'react-redux'

export default function _Navbar(props) {
  const cookies = new Cookies()
  const user = useSelector((state) => state.userLog.user)

  return (
    <>
      <Navbar bg="light" fixed="top" collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand className="d-flex flex-row align-items-center">
            <Link className="navbar-brand" to="/">
              <img
                src={require('../datas/images/onkey_logo.png')}
                width="40"
                height="40"
                className="d-inline-block align-text-top"
              />
              &nbsp; &nbsp;
              <img
                src={require('../datas/images/onkey_branchname.png')}
                className="d-inline-block align-text-top"
                width="100"
              />
            </Link>
            &emsp;
            <Link
              to="/qrlock"
              className="d-flex flex-column"
              style={{ fontSize: '7px', textDecoration: 'none' }}
            >
              <i
                style={{ fontSize: '35px', color: '#7ed957' }}
                className="fas fa-qrcode"
              ></i>
              <span style={{ color: 'black' }}>Scan now</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ width: '80%' }}
            backdrop={true}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img
                  src={require('../datas/images/onkey_logo.png')}
                  width="40"
                  height="40"
                  className="d-inline-block align-text-top"
                />
                &nbsp; &nbsp;
                <img
                  src={require('../datas/images/onkey_branchname.png')}
                  className="d-inline-block align-text-top"
                  width="100"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link as={Link} eventKey="/qrlock" to="/qrlock">
                  Mở khoá bằng QR
                </Nav.Link>
                {user && (
                  <Nav.Link
                    as={Link}
                    className=""
                    eventKey="/keylist"
                    to="/keylist"
                  >
                    Chìa khoá của tôi
                  </Nav.Link>
                )}
                <Nav.Link as={Link} eventKey="/" to="/">
                  Trang chủ
                </Nav.Link>

                {user ? (
                  <Nav.Link
                    as={Link}
                    className="text-danger"
                    eventKey="/logout"
                    to="/logout"
                  >
                    Đăng xuất
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} eventKey="/login" to="/login">
                    Đăng ký/ Đăng nhập
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className="align-navbar" style={{ height: '80px' }}>
        .
      </div>
    </>
  )
}
