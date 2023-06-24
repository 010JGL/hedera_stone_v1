"use client";

import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UploadForm() {
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
  //const [imageFile, SetImageFile] = useState("");
  const [metadata, setMetaData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validations
    // Gotta add user.id from cookies? to keep track of who uploaded

    //console.log(`inside handleSubmit upload`);

    const res = await fetch("/api/upload", {
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
        metadata,
      }),
    });

    const data3 = await res.json();
    //console.log(data3);
  };

  return (
    <main className="main">
      <h1 className="title">Welcome to the CTE Upload Page</h1>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicW3w">
            <Form.Label>Headstone Location (What3Words)</Form.Label>
            <Form.Control
              value={words}
              onChange={(e) => setWords(e.target.value)}
              type="words"
              name="words"
              placeholder="Headstone(What3Words)"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="country"
              name="country"
              placeholder="Country"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="state"
              name="state"
              placeholder="State"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="city"
              name="city"
              placeholder="City"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>Cemetery Name</Form.Label>
            <Form.Control
              value={cemeteryname}
              type="cemeteryname"
              onChange={(e) => setCemeteryname(e.target.value)}
              name="cemeteryname"
              placeholder="Cemetery Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={firstname}
              type="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              name="firstname"
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMiddlename">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              value={middlename}
              onChange={(e) => setMiddlename(e.target.value)}
              type="middlename"
              name="middlename"
              placeholder="Middle Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="surname"
              name="surname"
              placeholder="Surname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              value={datebirth}
              onChange={(e) => setDatebirth(e.target.value)}
              type="datebirth"
              name="datebirth"
              placeholder="Date of Birth"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDateDied">
            <Form.Label>Date Died</Form.Label>
            <Form.Control
              value={datedied}
              onChange={(e) => setDatedied(e.target.value)}
              type="datedied"
              name="datedied"
              placeholder="Date Died"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicExtras">
            <Form.Label>Extras</Form.Label>
            <Form.Control
              value={extras}
              onChange={(e) => setExtras(e.target.value)}
              type="extras"
              name="extras"
              placeholder="Extras"
            />
          </Form.Group>
          {/* <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" value={imageFile} />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicIconUrl">
            <Form.Label>CID URL</Form.Label>
            <Form.Control
              value={iconUrl}
              onChange={(e) => setIconUrl(e.target.value)}
              type="iconUrl"
              name="iconUrl"
              placeholder="CID URL"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMetaData">
            <Form.Label>Meta Data</Form.Label>
            <Form.Control
              value={metadata}
              onChange={(e) => setMetaData(e.target.value)}
              type="metadata"
              name="metadata"
              placeholder="Meta Data"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}
