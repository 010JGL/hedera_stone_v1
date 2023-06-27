"use client";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";
import logo from "../public/images/HederaStoneLogo.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="homepage">
      <ul className="nav-container">
      <div className="nav-logo">
        <Link href="/">
          <Image src={logo} width={100} height={100} alt="HederaStone Logo" />
        </Link>
      </div>
      </ul>
        <h1 className="title">HederaStone Temporary Page</h1>
        <div className="intro">
          Click here to experience the first draft CTE website.
        </div>
        <div className="intro-btn">
          <Button variant="outline-primary" href="/upload/login" size="lg">
            Upload
          </Button>{" "}
        </div>
        <div className="intro">
          Click here to experience the first draft SALES website.
        </div>
        <div className="intro-btn">
          <Button variant="outline-primary" href="/nfts" size="lg">
            Browse
          </Button>{" "}
        </div>
      </main>
      <div className="footer-box"></div>
    </NextUIProvider>
  );
}
