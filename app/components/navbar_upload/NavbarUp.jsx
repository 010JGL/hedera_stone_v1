"use client";

import React, { useState } from "react";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarUp = () => {
  return (
    <>
    <Navbar bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/upload/signup">Sign Up</Nav.Link>
          <Nav.Link href="/upload/login">Log In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarUp;