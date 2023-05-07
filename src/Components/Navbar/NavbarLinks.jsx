import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Carousel, Container } from 'react-bootstrap';
import logo from '../../Images/logo.png'
import SignIn from '../SignInPage/SignIn';


const NavbarLinks = () => {

    return (
        <div >
          <Navbar bg="dark"  expand="lg" className='fixed-top'>
      <Container>
      <Navbar.Brand href="#home" className='text-white fw-bold mx-auto'>  <img src={logo} style={{height:'40px'}} alt=""/> Hunger Time</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav className="mx-auto">
          
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>blog</Nav.Link>
            <Nav.Link href="#link" className='text-white'><Link to='/signin'>Sign In </Link></Nav.Link>
            <Nav.Link href="#link" className='text-white'><Link to='/signup'>Create Account </Link></Nav.Link>
            <Nav.Link href="#link" className='text-white'><Link to='/contact'>Contact Us </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   

        </div >
    );
};

export default NavbarLinks;