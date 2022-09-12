import React from 'react'
import { Navbar, Nav,Container } from 'react-bootstrap'
import  { NavLink } from 'react-router-dom'
import Searchbox from './Searchbox'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to='/add-project'>Add Project</NavLink></Nav.Link> 
            <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
        <Searchbox/>
      </Container>
    </Navbar>
  )
}

export default NavBar