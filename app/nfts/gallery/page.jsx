"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { Card, Grid, Row, Text, Col } from "@nextui-org/react";

import { Button } from "@nextui-org/react";

import OneCard from "@/app/components/cards/OneCard";

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

    const data = await res.json();
    console.log(`data:`, data);

    setNftsList(data);
  };

  useEffect(() => {
    loadGallery();
  });

  return (
    <main className="main">
      <h1 className="title">Gallery</h1>

      <div className="cards-container">
        {/* gap doesnt work, cant add paddin either??? wtf */}
        <Grid.Container gap={2} justify="center">
          {nftsList.map((item, index) => (
            <OneCard data={item} key={index}></OneCard>
          ))}
        </Grid.Container>
      </div>
    </main>
  );
}
