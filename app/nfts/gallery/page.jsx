"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Image from "next/image";

import example from "../../../public/images/headstone-example.jpg";

export default function Gallery() {
  return (
    <main>
      <h1 className="title">Gallery</h1>
      <div className="cards-container"></div>

      <div className="cards-container">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                {/* <Image src={example}></Image> */}
                <Card.Img variant="top" src={example}/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
}
