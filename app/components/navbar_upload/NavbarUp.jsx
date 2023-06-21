"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/HederaStoneLogo.jpg";
import title from "../../../public/images/HederaStoneTitle.png";
import Login from "../../../public/images/LoginIcon.png";

const NavbarUp = (path) => {
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(path);
  });

  console.log(`currentPath.props:`, currentPath.props);

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
          <Link href="/upload/upload">
            {currentPath.props === "/upload/upload" && (
              <div className="button-text-focustwo">Upload</div>
            )}
            {currentPath.props === "/upload" && (
              <div className="button-text">Upload</div>
            )}
            {currentPath.props === "/upload/signup" && (
              <div className="button-text">Upload</div>
            )}
            {currentPath.props === "/upload/login" && (
              <div className="button-text">Upload</div>
            )}
          </Link>
        </div>
        <div className="button-box">
          <Link href="/upload/signup">
            {currentPath.props === "/upload/signup" && (
              <div className="button-text-focustwo">Sign Up</div>
            )}
            {currentPath.props === "/upload" && (
              <div className="button-text">Sign Up</div>
            )}
            {currentPath.props === "/upload/upload" && (
              <div className="button-text">Sign Up</div>
            )}
            {currentPath.props === "/upload/login" && (
              <div className="button-text">Sign Up</div>
            )}
          </Link>
        </div>
      </div>
      <div className="button-login">
        <Link href="/upload/login">
          <Image src={Login} width={50} height={50} alt="Login button" />
        </Link>
        <div className="button-login-text">Login</div>
      </div>
    </ul>
  );
};

export default NavbarUp;
