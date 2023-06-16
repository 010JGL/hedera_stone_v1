"use client";

import { useState } from "react";

import { Card, Grid, Row, Text, Col } from "@nextui-org/react";

import { Button } from "react-bootstrap";

import example from "../../../public/images/headstone-example.jpg";

export default function Gallery() {
  const [words, setWords] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [surname, setSurname] = useState("");
  const [datebirth, setDatebirth] = useState("");
  const [datedied, setDatedied] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cemeteryname, setCemeteryname] = useState("");
  const [extras, setExtras] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [nftsList, setNftsList] = useState([
    {
    },
    {
    },
    {
    },
    {
    },
  ]);

  const loadGallery = async () => {
    // e.preventDefault();
    // validations

    //console.log(`inside handleSubmit`);

    const res = await fetch(process.env.URL + "/api/gallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: new Date().toISOString(),
        words,
        firstname,
        middlename,
        surname,
        datebirth,
        datedied,
        country,
        state,
        city,
        cemeteryname,
        extras,
        iconUrl,
      }),
    });

    const data = await res.json();
    //console.log(`data:`, data);
    setNftsList(data);
    

    //console.log(`nftsList:`, nftsList);
  };
  loadGallery();
  

  

  return (
    <main className="main">
      <h1 className="title">Gallery</h1>

      <div className="cards-container">
        <Grid.Container gap={2} justify="flex-start">
          {nftsList.map((item, index) => (
            <Card key={index} css={{ w: "25%", h: "400px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    New
                  </Text>
                  <Text h3 color="black">
                    Title or nothing
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={nftsList[index].iconurl}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card example background"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text color="#000" size={12}>
                      Available soon.
                    </Text>
                    <Text
                      css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      {item.datedied}
                    </Text>
                    <Text color="#000" size={12}>
                      Get notified.
                    </Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button flat auto rounded color="secondary">
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          Discover
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          ))}
        </Grid.Container>
      </div>
    </main>
  );
}

{/* <div className="cards-container">
        <Grid.Container gap={2} justify="flex-start">
          {nftsList.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card isPressable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={nftsList[index].iconurl}
                    objectFit="cover"
                    width="100%"
                    height={300}
                    alt={nftsList[index].title}
                  />
                </Card.Body>
                <Card.Divider />
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{nftsList[index].firstname}</Text>
                    <Text
                      css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      {item.datedied}
                    </Text>
                    <Button size="sm" color="secondary">
                      Learn more
                    </Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </div> */}