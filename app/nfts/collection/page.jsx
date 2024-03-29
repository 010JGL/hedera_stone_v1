"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { Card, Grid, Row, Text, Button, Col } from "@nextui-org/react";

export default function Collection() {
  const [words, setWords] = useState();
  const [firstname, setFirstname] = useState();
  const [middlename, setMiddlename] = useState();
  const [surname, setSurname] = useState();
  const [datebirth, setDatebirth] = useState();
  const [datedied, setDatedied] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [cemeteryname, setCemeteryname] = useState();
  const [extras, setExtras] = useState();
  const [iconUrl, setIconUrl] = useState();
  const [nftsList, setNftsList] = useState([{}, {}, {}, {}]);

  const loadGallery = async () => {
    // e.preventDefault();

    // validations

    const res = await fetch("/api/gallery", {
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
    // returns a list of * the nfts from the table
    const results = await res.json();

    setNftsList(results);
  };

  useEffect(() => {
    loadGallery();
  });
  return (
    <main className="main">
      <div className="cards-container">
        {/* gap doesnt work, cant add paddin either??? wtf */}
        <Grid.Container gap={2} justify="flex-start">
          {nftsList.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Link href={`/nfts/gallery/${item.id}`}>
                <Card isPressable>
                  <Card.Header
                    css={{ position: "absolute", zIndex: 1, top: 5 }}
                  >
                    <Col></Col>
                  </Card.Header>
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
                    <Row wrap="wrap" justify="space-between" align="center">
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
