"use client";

import React, { useState } from "react";

import Image from "next/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../../public/images/logo.png";
import name from "../../../public/images/name.png";
import under_name from "../../../public/images/under-name.png";

const NavbarNfts = () => {
  return (
    <>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <div className="nav-logo">
              <Image src={logo} width={80} height={80} alt="HederaStone Logo" />
            </div>
          </Navbar.Brand>
          <div className="nav-title">
            <Image src={name} alt="HederaStone" />
            <Image src={under_name} alt="The Family Tree of the Future" />
          </div>

          <div className="nav-links">
            <Nav className="me-auto">
              <Nav.Link href="/nfts/gallery">
                <div className="button-text">Gallery</div>
              </Nav.Link>
              <Nav.Link href="/nfts/search">
                <div className="button-text">Search</div>
              </Nav.Link>
              <Nav.Link href="/nfts/collection">
                <div className="button-text">Collection</div>
              </Nav.Link>
              <Nav.Link href="">
                <div className="button-icon"></div>
                <div>Connect wallet</div>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarNfts;
