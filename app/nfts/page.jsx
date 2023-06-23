"use client";

import { StrictMode } from "react";

// import ThreeD_image from "../components/3d_image/threed_image";

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
        <p>This is how it looks from your phone.</p>
        <div className="top-picture"></div>
        <p>You can even project it at home.</p>
        <div className="bot-picture"></div>
      </div>
      <div className="bottom-text">HP 7 Block of text</div>
      <div>In other parts of our site you will find:</div>
    </main>
  );
}
