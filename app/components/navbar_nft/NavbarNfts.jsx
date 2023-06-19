"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/HederaStoneLogo.jpg";
import title from "../../../public/images/HederaStoneTitle.png";
import wallet from "../../../public/images/WalletIcon.png";

const NavbarNfts = () => {
  return (
    <ul className="nav-container">
      <div className="nav-logo">
        <Link href="/">
          <Image src={logo} width={100} height={100} alt="HederaStone Logo" />
        </Link>
      </div>
      <div className="nav-title">
        <Image src={title} width={240} height={40} alt="HederaStone" />
    
        <div className="nav-message">The 3D Family Tree of the Future</div>
      </div>
      <div className="button-container">
        <div className="button-box">
          <Link href="/nfts/gallery">
            <div className="button-text">Gallery</div>
          </Link>
        </div>
        <div className="button-box">
          <Link href="/nfts/search">
            <div className="button-text">Search</div>
          </Link>
        </div>
        <div className="button-box">
          <Link href="/nfts/collection">
            <div className="button-text">Collection</div>
          </Link>
        </div>
        <div className="button-box">
          <Link href="/nfts/collection2">
            <div className="button-text">3d test</div>
          </Link>
        </div>
      </div>
      <div className="button-icon">
        <Link href="/upload/login">
          <Image src={wallet} width={50} height={50} alt="Login button" />
        </Link>
        <div className="button-icon-text">Connect Blade Wallet</div>
      </div>
    </ul>
  );
};

export default NavbarNfts;
