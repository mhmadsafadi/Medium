import React, { useState } from 'react'
import {Container, Navbar, Nav, Button} from 'react-bootstrap'
import Registration from '../Modal/Registration'
import './header.css'

const Header = () => {

  const [navColor, setNavColor] = useState(false)

  
  const [modalShow, setModalShow] = useState(false)

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const changeColor = () => {
    if(window.scrollY >= 400){
      setNavColor(true)
    }else{
      setNavColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <>
      <Navbar expand="md" fixed="top" className={navColor && 'bg-navbar'}>
        <Container>
            <Navbar.Brand href="#">
                <i className="bi bi-medium"></i>
                Medium
            </Navbar.Brand>
            <Nav className="ms-auto d-none d-md-flex">
                <Nav.Link href="#">Our story</Nav.Link>
                <Nav.Link href="#">Membership</Nav.Link>
                <Nav.Link href="#">Write</Nav.Link>
                <Nav.Link href="#">Sign in</Nav.Link>
            </Nav>
            <Button onClick={handleShow} variant={navColor ? 'success' : 'dark'}>Get started</Button>
        </Container>
      </Navbar>
      <Registration modalShow={modalShow} onClose={handleClose}/>
    </>
  )
}

export default Header