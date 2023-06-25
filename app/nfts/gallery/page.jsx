"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { Card, Grid, Row, Text, Button, Col } from "@nextui-org/react";

export default function Gallery() {
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

  const urlList = [
    "https://bafkreiceyq2luxzrszr5qvg5ycyp4cgyq6c7eelbtsostokr3degyptbza.ipfs.nftstorage.link/",
    "https://bafkreie3luugc4yatvs7aznuet2kxakvlgbhgigwgzr5yge5fivjg6m6me.ipfs.nftstorage.link/",
    "https://bafkreibcrzg6i5neuuvkm5hsfj2e7tscowc75cyacd3mqa7vc55vfdw3ba.ipfs.nftstorage.link/",
    "https://bafkreihnmpzmei62ykjrzy4ch6vsvjnwcewv2rgz7nctiheaaewdy3mt5i.ipfs.nftstorage.link/",
    
  ];

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
      <h1 className="title">Gallery</h1>
      <div className="cards-container">
        <Text
          size={16}
          weight="bold"
          transform="uppercase"
          color="white"
          className="twoD-text"
        >
          Example 2D images
        </Text>
        <Grid.Container gap={2} justify="flex-start">
          {nftsList.map((item, index) => (
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
      <Text size={16} weight="bold" transform="uppercase" color="white" className="threeD-text">
        Click on the images below to see 3D Model
      </Text>
      {/* Data to be incorporated in DB and displayed dynamicly in the future */}
      <div className="cards-container">
        <Grid.Container gap={2} justify="flex-start">
          {urlList.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Link href={`/nfts/gallery/${index + 1}`}>
                <Card isPressable>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={item}
                      objectFit="cover"
                      width="100%"
                      height="340px"
                      alt="3D model"
                    />
                  </Card.Body>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </main>
  );
}
