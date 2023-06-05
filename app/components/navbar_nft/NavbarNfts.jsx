"use client";

import React, { useState } from "react";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarNfts = () => {
  return (
    <>
    <Navbar bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/nfts/gallery">Gallery</Nav.Link>
          <Nav.Link href="/nfts/collection">Collection</Nav.Link>
          <Nav.Link href="/nfts/search">Search</Nav.Link>
          <Nav.Link href="">Connect wallet option</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarNfts;
