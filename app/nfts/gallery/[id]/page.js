"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Card, Grid, Row, Text, Col } from "@nextui-org/react";

import { Button } from "@nextui-org/react";


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
  const [nftsList, setNftsList] = useState([{}, {}, {}, {}]);


    const router = useRouter();
    
    const path = usePathname();

    console.log(`path`, path);
    const id = path.at(-1);
    console.log(`id`, id)



  
  const loadNft = async () => {
    
    // e.preventDefault();
    
    // validations
    //console.log(`inside handleSubmit`);

    const res = await fetch("/api/specific", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: new Date().toISOString(),
        id
      }),
    });

    const data3 = await res.json();
    console.log(`data3:`, data3)
    setFirstname(data3.firstname)
  };

  useEffect(() => {
    loadNft();
    
  });
    return (
      <main className="main">
      <h1 className="title">NFT</h1>
        {firstname}
      
    </main>
  );
}