"use client";

import Link from "next/link";

import { Card, Grid, Row, Text } from "@nextui-org/react";

import { Button } from "@nextui-org/react";

export default function SearchResult(searchResults) {
  //Gets the results from the props
  const searchList = searchResults.list;

  return (
    <main className="main">
      <h1 className="title">Search Results</h1>
      <div className="cards-container">
        <Grid.Container gap={2} justify="flex-start">
          {searchList.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card isPressable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={item.iconurl}
                    objectFit="cover"
                    width="100%"
                    height={400}
                    alt={item.firstname}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-evenly" align="center">
                    <Text b>
                      {item.datebirth}
                      <br></br>
                      {item.datedied}
                    </Text>
                    <Text b>
                      {item.firstname}
                      <br></br>
                      {item.surname}
                    </Text>
                    <Link href={`/nfts/gallery/${item.id}`}>
                      <Button flat auto rounded color="primary">
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          Open
                        </Text>
                      </Button>
                    </Link>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </main>
  );
}

{
  /* <div className="cards-container">
        {/* gap doesnt work, cant add paddin either??? wtf *
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
        </div> */
}
