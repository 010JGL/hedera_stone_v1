"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Card, Col, Row, Button, Text, Table } from "@nextui-org/react";

export default function Specific() {
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

  // gets the pathname in the URL to load the right page
  const path = usePathname();
  // gets the last char, will have problem after 2 chars
  const id = path.at(-1);
  //console.log(`id`, id);

  const loadNft = async () => {
    // e.preventDefault();

    // validations

    const res = await fetch("/api/specific", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: new Date().toISOString(),
        id,
      }),
    });

    const data3 = await res.json();
    //console.log(`data3:`, data3);
    setFirstname(data3.firstname);
    setMiddlename(data3.middlename);
    setSurname(data3.surname);
    setDatebirth(data3.datebirth);
    setDatedied(data3.datedied);
    setCountry(data3.country);
    setState(data3.state);
    setCity(data3.city);
    setCemeteryname(data3.cemeteryname);
    setExtras(data3.extras);
    setWords(data3.words);
    setIconUrl(data3.iconurl);
  };

  useEffect(() => {
    loadNft();
  });

  return (
    <main className="main">
      <h1 className="title">NFT specific page</h1>
      <div className="specific-card">
        <Card css={{ w: "80%", h: "800px" }}>
          <Card.Header
            css={{ position: "absolute", zIndex: 1, top: 5 }}
          ></Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={iconUrl}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row justify="flex-end">
                  <Col>
                    <Text
                      size={14}
                      weight="bold"
                      transform="uppercase"
                      color="white"
                    >
                      Price 5000 Hbars
                    </Text>
                  </Col>
                  <Button
                    flat
                    auto
                    rounded
                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Buy now
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>
      <div className="info-container">
        <Table
          aria-label="Nft specific page"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>FIRST NAME</Table.Column>
            <Table.Column>MIDDLE NAME</Table.Column>
            <Table.Column>SUR NAME</Table.Column>
            <Table.Column>DATE BIRTH</Table.Column>
            <Table.Column>DATE DIED</Table.Column>
            <Table.Column>COUNTRY</Table.Column>
            <Table.Column>STATE</Table.Column>
            <Table.Column>CITY</Table.Column>
            <Table.Column>CEMETERY NAME</Table.Column>
            <Table.Column>3 WORDS LOCATION</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>{firstname}</Table.Cell>
              <Table.Cell>{middlename}</Table.Cell>
              <Table.Cell>{surname}</Table.Cell>
              <Table.Cell>{datebirth}</Table.Cell>
              <Table.Cell>{datedied}</Table.Cell>
              <Table.Cell>{country}</Table.Cell>
              <Table.Cell>{state}</Table.Cell>
              <Table.Cell>{city}</Table.Cell>
              <Table.Cell>{cemeteryname}</Table.Cell>
              <Table.Cell>{words}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="info-container">
        <Table
          aria-label="Nft specific page"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>EXTRAS</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>{extras}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}
