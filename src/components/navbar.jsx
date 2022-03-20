import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavDropdown, Navbar, Container, Offcanvas } from 'react-bootstrap'
import PostFilterForm from './PostFilterForm/PostFilterForm'
export default function _Navbar(props) {
  const [expanded, setExpanded] = useState(false)
 function handleFiltersChange(newFilters){

 }
  return (
    <>
      <Navbar bg="light" fixed="top" collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/balo">
              <img
                src={require('../datas/images/baloicon.png')}
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              &nbsp; Balo
            </Link>
           <PostFilterForm onSubmit={handleFiltersChange} />
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
                Balo - Mạng xã hội du lịch
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link as={Link} eventKey="/balo" to="/balo">
                  Trang chủ
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  eventKey="/balo/chuyendicuanam"
                  to="/balo/chuyendicuanam"
                >
                  Chuyến đi của năm
                </Nav.Link>
                <Nav.Link as={Link} eventKey="/balo/login" to="/balo/login">
                  Đăng ký/ Đăng nhập
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className="align-navbar" style={{ height: '50px' }}>
        .
      </div>
    </>
  )
}
