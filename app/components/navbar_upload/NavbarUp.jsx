"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/HederaStoneLogo.jpg";
import title from "../../../public/images/HederaStoneTitle.png";
import under_name from "../../../public/images/under-name.png";
import Login from "../../../public/images/LoginIcon.png";

const NavbarUp = () => {
  return (
    <ul className="nav-container">
      <div className="nav-logo">
        <Link href="/">
          <Image src={logo} width={100} height={100} alt="HederaStone Logo" />
        </Link>
      </div>
      <div className="nav-title">
        <Image src={title} width={200} height={40} alt="HederaStone" />
        <Image
          src={under_name}
          width={286}
          height={32}
          alt="The Family Tree of the Future"
        />
      </div>
      <div className="button-container">
        <div className="button-box">
          <Link href="/upload/upload">
            <div className="button-text">Upload</div>
          </Link>
        </div>
        <div className="button-box">
          <Link href="/upload/signup">
            <div className="button-text">Sign Up</div>
          </Link>
        </div>
      </div>
      <div className="button-login">
        <Link href="/upload/login">
          <Image src={Login} width={50} height={50} alt="Login button" />
        </Link>
      </div>
    </ul>
  );
};

export default NavbarUp;
