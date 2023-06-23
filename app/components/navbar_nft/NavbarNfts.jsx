"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@nextui-org/react";

import logo from "../../../public/images/HederaStoneLogo.jpg";
import title from "../../../public/images/HederaStoneTitle.png";
import bladewallet from "../../../public/images/bladewallet.png";

import { BladeConnector, ConnectorStrategy } from "@bladelabs/blade-web3.js";
import { HederaNetwork } from "@bladelabs/blade-web3.js";

import { BladeSigner } from "@bladelabs/blade-web3.js";
import { bladeConnector } from "@bladelabs/blade-web3.js";

const NavbarNfts = (path) => {
  const [currentPath, setCurrentPath] = useState("");

  const [status, setStatus] = useState("0");

  useEffect(() => {
    setCurrentPath(path);
  });
  //gets the id to display Nav icons dynamicly
  const id = path.props.slice(14);
  const specificLink = `/nfts/gallery/${id}`;


  // async function initBlade() {
  //   const bladeSigner = new BladeSigner();
  //   const params = {
  //     network: HederaNetwork.Testnet,
  //     // dAppCode - optional while testing, request specific one by contacting us.
  //     dAppCode: "yourAwesomeApp",
  //   };
  //   // create session with optional parameters.
  //   await bladeSigner.createSession(params);

  //   // bladeSigner object can now be used.

  //   bladeSigner.getAccountId();
  //   bladeSigner.getAccountId().toString();
  //   console.log(
  //     `bladeSigner.getAccountId().toString()`,
  //     bladeSigner.getAccountId().toString()
  //   );
  // }
  // async function checkAccount() {
  //   console.log()
  // }
  // checkAccount();

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
          <Link href="/nfts">
            {currentPath.props === specificLink && (
              <div className="button-text">Home</div>
            )}
            {currentPath.props === "/nfts/gallery" && (
              <div className="button-text">Home</div>
            )}
            {currentPath.props === "/nfts" && (
              <div className="button-text-focus">Home</div>
            )}
            {currentPath.props === "/nfts/collection" && (
              <div className="button-text">Home</div>
            )}
            {currentPath.props === "/nfts/search" && (
              <div className="button-text">Home</div>
            )}
            {currentPath.props === "/nfts/collection2" && (
              <div className="button-text">Home</div>
            )}
          </Link>
        </div>
        <div className="button-box">
          <Link href="/nfts/search">
            {currentPath.props === specificLink && (
              <div className="button-text">Search</div>
            )}
            {currentPath.props === "/nfts/search" && (
              <div className="button-text-focus">Search</div>
            )}
            {currentPath.props === "/nfts" && (
              <div className="button-text">Search</div>
            )}
            {currentPath.props === "/nfts/collection" && (
              <div className="button-text">Search</div>
            )}
            {currentPath.props === "/nfts/gallery" && (
              <div className="button-text">Search</div>
            )}
            {currentPath.props === "/nfts/collection2" && (
              <div className="button-text">Search</div>
            )}
          </Link>
        </div>
        <div className="button-box">
          <Link href="/nfts/gallery">
            {currentPath.props === specificLink && (
              <div className="button-text-focus">Gallery</div>
            )}
            {currentPath.props === "/nfts/gallery" && (
              <div className="button-text-focus">Gallery</div>
            )}
            {currentPath.props === "/nfts" && (
              <div className="button-text">Gallery</div>
            )}
            {currentPath.props === "/nfts/collection" && (
              <div className="button-text">Gallery</div>
            )}
            {currentPath.props === "/nfts/search" && (
              <div className="button-text">Gallery</div>
            )}
            {currentPath.props === "/nfts/collection2" && (
              <div className="button-text">Gallery</div>
            )}
          </Link>
        </div>
        <div className="button-box">
          <Link href="/nfts/collection">
            {currentPath.props === specificLink && (
              <div className="button-text">Collection</div>
            )}
            {currentPath.props === "/nfts/collection" && (
              <div className="button-text-focus">Collection</div>
            )}
            {currentPath.props === "/nfts" && (
              <div className="button-text">Collection</div>
            )}
            {currentPath.props === "/nfts/search" && (
              <div className="button-text">Collection</div>
            )}
            {currentPath.props === "/nfts/gallery" && (
              <div className="button-text">Collection</div>
            )}
            {currentPath.props === "/nfts/collection2" && (
              <div className="button-text">Collection</div>
            )}
          </Link>
        </div>
      </div>
      <div className="button-icon">
        <Image src={bladewallet} width={160} height={100} alt="Login button" />

        <div className="button-wallet">
          <Button
            color="gradient"
            auto
            onClick={(e) => {
              initBlade();
            }}
          >
            Connect Blade Wallet
          </Button>
        </div>
      </div>
    </ul>
  );
};

export default NavbarNfts;
