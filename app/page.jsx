"use client";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <h1 className="title">
          HederaStone Temporary Page
        </h1>
        <div>Click here to experience the first draft CTE website.</div>
        <div>
          <Button variant="outline-primary" href="/upload">
            Upload
          </Button>{" "}
        </div>
        <div>Click here to experience the first draft SALES website.</div>
        <div>
          <Button variant="outline-primary" href="/nfts">
            Browse
          </Button>{" "}
        </div>
      </main>
    </NextUIProvider>
  );
}
