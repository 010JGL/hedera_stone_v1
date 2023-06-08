"use client";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <main>
      <h1 className="title">
        Welcome to HederaStone … Your family tree in three dimensions
      </h1>
      <div>Click here if you want to upload photos</div>
      <div>
        <Button variant="outline-primary" href="/upload">
          Upload
        </Button>{" "}
      </div>
      <div>Click here if you want to browse NFTs</div>
      <div>
        <Button variant="outline-primary" href="/nfts">
          Browse
        </Button>{" "}
      </div>
    </main>
  );
}
