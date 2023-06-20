"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

import { Card, Row, Button, Text, Table } from "@nextui-org/react";

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
  // removes the "/nfts/gallery/" so i can get the id from URL
  const id = path.slice(14);

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
    // Returns * from the table
    const results = await res.json();

    setFirstname(results.firstname);
    setMiddlename(results.middlename);
    setSurname(results.surname);
    setDatebirth(results.datebirth);
    setDatedied(results.datedied);
    setCountry(results.country);
    setState(results.state);
    setCity(results.city);
    setCemeteryname(results.cemeteryname);
    setExtras(results.extras);
    setWords(results.words);
    setIconUrl(results.iconurl);
  };

  useEffect(() => {
    loadNft();
  });

  return (
    <main className="main">
      <h1 className="title">NFT specific page</h1>
      <div className="specific-card">
        <Card isPressable>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={iconUrl}
              objectFit="cover"
              width="100%"
              height={400}
              alt="Specific HeadStone"
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
            <Row wrap="wrap" justify="space-evenly" align="center">
              <Text b>5000 HBAR</Text>
              <Button flat auto rounded color="primary">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Buy
                </Text>
              </Button>
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
