"use client";

import Link from "next/link";

import { Card, Grid, Row, Text } from "@nextui-org/react";

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
              <Link href={`/nfts/gallery/${item.id}`}>
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
                    </Row>
                  </Card.Footer>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </main>
  );
}

