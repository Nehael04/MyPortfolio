import React, { useState } from 'react'
import './Navbar.css'
import neha from '../assets/neha.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
  return (
    <>  
      <Navbar expand="md" className="vertical-navbar d-flex flex-column align-items-center">
        <div className='dp-container d-none d-md-block'>
          <img className="dp position-relative" src={neha} />
        </div>
        <Container className="flex-md-column p-4">
          <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav">☰</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column w-100 align-items-center">
             
              <Nav.Link href="#about" className="nav-item">ABOUT</Nav.Link>
            <Nav.Link href="#skills" className="nav-item">SKILLS</Nav.Link>
            <Nav.Link href="#projects" className="nav-item">PROJECTS</Nav.Link>
            <Nav.Link href="#contact" className="nav-item">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Navbar1
