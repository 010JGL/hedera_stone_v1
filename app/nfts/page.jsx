"use client";

import { StrictMode } from "react";

import { Card, Text } from "@nextui-org/react";

import { Form, Button } from "react-bootstrap";

import Link from "next/link";

import ThreeD_image from "../components/3d_image/threed_image";

import VideoPlayer from "../components/video/video";

export default function Nfts() {
  const hp1 = {
    url: "https://streamable.com/cfz9j0",
    height: "360px",
    width: "640px",
  };

  const hp4 = {
    url: "https://streamable.com/wp2j24",
    height: "360px",
    width: "640px",
  };

  return (
    <main className="main">
      <div className="three-d-container">
        <div className="home-display"></div>
        <ThreeD_image></ThreeD_image>
      </div>
      <div className="video-box">
        <div>
          <iframe
            src="https://player.vimeo.com/video/839226620?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{
              position: "absolute",
              top: "850px",
              left: "25%",
              width: "50%",
              height: "50%",
            }}
            title="HP2_Imagine"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div className="middle-box">
        <div className="middle-image"></div>
        <div className="middle-text">
          We don't just have one image of each<br></br> memorial, we have at
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
      <div className="middle-column-box">
        <div className="middle-column">
          <div className="middle-text">
            This is how it looks from your phone.
          </div>
          <div className="top-picture"></div>
        </div>
        <div className="middle-column">
          <div className="middle-text">You can even project it at home.</div>
          <div className="bot-picture"></div>
        </div>
      </div>
      <div className="bottom-text-box">
        <Card
          isHoverable
          variant="bordered"
          css={{ mw: "2000px", backgroundColor: "black" }}
        >
          <Card.Body>
            <Text size={24} className="text-box" css={{ color: "white" }}>
              HOW IT WORKS
            </Text>
            <Text size={24} className="text-box" css={{ color: "white" }}>
              <br></br> We have a huge community around the globe whose passion
              is capturing images which we then turn into 3D models. If you
              would like to join that community and earn royalties from the
              models we create, then please leave your name and email address
              and we will send more information.
            </Text>
            <Form>
              <Form.Group className="homepage-form" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="homepage-form" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="bottom-text">
        In other parts of our site you will find:-
      </div>
      <div className="links-box">
        <div className="link-box">
          <div className="link-box-text">
            How to search for <br></br> an ancestor
          </div>
          <Link href="/nfts/search">
            <div className="button-text">Search</div>
          </Link>
        </div>
        <div className="link-box">
          <div className="link-box-text">
            Some other <br></br> examples
          </div>
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
