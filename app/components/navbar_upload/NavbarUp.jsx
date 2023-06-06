"use client";

import React, { useState } from "react";

import Image from "next/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../../public/images/logo.png";
import name from "../../../public/images/name.png";
import under_name from "../../../public/images/under-name.png";
import layer1 from "../../../public/images/Layer_1.png";

const NavbarUp = () => {
  return (
    <>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <div className="nav-logo">
              <Image src={logo} alt="HederaStone Logo" />
            </div>
          </Navbar.Brand>
          <div className="nav-title">
            <Image src={name} alt="HederaStone" />
            <Image src={under_name} alt="The Family Tree of the Future" />
          </div>
          <Nav className="me-auto">
            <Nav.Link href="/upload/upload">
              <div className="button-text">Upload</div>
            </Nav.Link>
            <Nav.Link href="/upload/signup">
            <div className="button-text">Sign Up</div>
              </Nav.Link>
            <Nav.Link href="/upload/login">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarUp;
