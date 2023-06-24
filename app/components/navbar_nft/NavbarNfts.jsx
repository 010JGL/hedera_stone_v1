"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@nextui-org/react";
import { WalletSignerType, WalletContext } from "../../context/walletContext";

import logo from "../../../public/images/HederaStoneLogo.jpg";
import title from "../../../public/images/HederaStoneTitle.png";
import bladewallet from "../../../public/images/bladewallet.png";
import PairBlade from "../buttons/pairWallet/PairBlade";

// import { BladeSigner, HederaNetwork } from "@bladelabs/blade-web3.js";

const NavbarNfts = (path) => {
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(path);
  });
  //gets the id to display Nav icons dynamicly
  const id = path.props.slice(14);
  const specificLink = `/nfts/gallery/${id}`;

  // @type {WalletSignerType}
  const { connectBlade, connectedId } = React.useContext(WalletContext);

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
        {/* <Image src={bladewallet} width={160} height={100} alt="Login button" /> */}
        <div className="button-wallet">
          <PairBlade />
          {connectedId ? (
            <p>Connected: {connectedId}</p>
          ) : (
            <p>Connect Wallet</p>
          )}
          {/* <Button
            color="gradient"
            auto
            onClick={(e) => {
              initBlade();
            }}
          >
            Connect Blade Wallet
          </Button> */}
        </div>
      </div>
    </ul>
  );
};

export default NavbarNfts;
