"use client";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="homepage">
        <h1 className="title">
          HederaStone Temporary Page
        </h1>
        <div className="intro">Click here to experience the first draft CTE website.</div>
        <div className="intro-btn">
          <Button variant="outline-primary" href="/upload" size="lg">
            Upload
          </Button>{" "}
        </div>
        <div className="intro">Click here to experience the first draft SALES website.</div>
        <div className="intro-btn">
          <Button variant="outline-primary" href="/nfts" size="lg">
            Browse
          </Button>{" "}
        </div>
      </main>
    </NextUIProvider>
  );
}
