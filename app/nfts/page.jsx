"use client";

import { StrictMode } from "react";

<<<<<<< HEAD
// import ThreeD_image from "../components/3d_image/threed_image";
=======
import { Card, Text } from "@nextui-org/react";

import Link from "next/link";

import ThreeD_image from "../components/3d_image/threed_image";
>>>>>>> main

import VideoPlayer from "../components/video/video";

export default function Nfts() {
  const hp1 = {
    url: "https://streamable.com/cfz9j0",
    height: "756px",
    width: "1344px",
  };

  const hp4 = {
    url: "https://streamable.com/wp2j24",
    height: "468px",
    width: "832px",
  };

  return (
    <main className="main">
      <h1 className="title">
        Welcome to HederaStone … Your family tree in three dimensions
      </h1>
      <div className="three-d-container">
        {/* <ThreeD_image></ThreeD_image> */}
      </div>
      <div className="home-display"></div>
      <div className="video-box">
        <StrictMode>
          <VideoPlayer url={hp1} />
        </StrictMode>
      </div>
      <div className="middle-box">
        <div className="middle-image"></div>
        <div className="middle-text">
          We dont just have one image of each<br></br> memorial, we jave at
          least 20.
        </div>
      </div>
      <div className="middle-box">
        <div className="middle-text">
          How to explore your 3D model from <br></br>all angles on your laptop.
        </div>
        <div className="middle-image-two">
          <StrictMode>
            <VideoPlayer url={hp4} />
          </StrictMode>
        </div>
      </div>
      <div className="middle-column">
        <p className="title-text">This is how it looks from your phone.</p>
        <div className="top-picture"></div>
        <p className="title-text">You can even project it at home.</p>
        <div className="bot-picture"></div>
      </div>
      <div className="bottom-text-box">
        <Card
          isHoverable
          variant="bordered"
          css={{ mw: "2000px", backgroundColor: "lightgray" }}
        >
          <Card.Body>
            <Text size={30} className="text-box">
              HOW IT WORKS.<br></br> We have a huge community around the globe
              whose passion is capturing images which we then turn into 3D
              models. If you would like to join that community and earn
              royalties from the models we create, then please leave your name
              (Input Box) and email address here (Input Box) and we will send
              more information.
            </Text>
          </Card.Body>
        </Card>
      </div>
      <div className="bottom-text">
        In other parts of our site you will find:
      </div>
      <div className="links-box">
        <div className="link-box">
          <div className="link-box-text">How to search for <br></br> an ancestor</div>
          <Link href="/nfts/search">
            <div className="button-text">Search</div>
          </Link>
        </div>
        <div className="link-box">
          <div className="link-box-text">Some other <br></br> examples</div>
          <Link href="/nfts/gallery">
            <div className="button-text">Gallery</div>
          </Link>
        </div>
        <div className="link-box">
          <div className="link-box-text">
            How your private <br></br> collection will appear
          </div>
          <Link href="/nfts/collection">
            <div className="button-text">Collection</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
