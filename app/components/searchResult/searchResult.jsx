"use client";

import { useState, useEffect } from "react";

import { Card, Grid, Row, Text, Col } from "@nextui-org/react";

import { Button } from "@nextui-org/react";


export default function SearchResult(searchResults) {

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
  const [nftsList, setNftsList] = useState([{}, {}, {}, {}]);
  //console.log(`searchResults:`, searchResults)

  const searchList = searchResults.list
  

  return (
    <main className="main">
      <h1 className="title">Search Results</h1>

      <div className="cards-container">
        {/* gap doesnt work, cant add paddin either??? wtf */}
        <Grid.Container gap={2} justify="center">
            {searchList.map((item, index) => (
              <Card key={index} css={{ w: "25%", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text h3 color="black">
                      Title
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={searchList[index].iconurl}
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
                      <Text
                        css={{
                          color: "$accents7",
                          fontWeight: "$semibold",
                          fontSize: "$sm",
                        }}
                      >
                        {item.datebirth}
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