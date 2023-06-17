"use client";

import { useState } from "react";

import SearchResult from "@/app/components/searchResult/searchResult";

import { Form, Button } from "react-bootstrap";

export default function Search() {
  const [firstname, setFirstname] = useState("");
  const [data3, setData3] = useState("");

  const handleSearch = async (error) => {
    error.preventDefault();
    // validations

    //console.log(`inside handlesearch`);

    const res = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: new Date().toISOString(),
        firstname,
      }),
    });

    const data3 = await res.json();
    //console.log(`data3:`, data3);
    setData3(data3);
  };

  if (data3.length < 1) {
    return (
      <main className="main">
        <h1 className="title">Search Form</h1>
        <div className="form-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicW3w">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={firstname}
                onChange={(error) => setFirstname(error.target.value)}
                type="firstname"
                name="firstname"
                placeholder="First Name (Capital first letter)"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSearch}>
              Submit
            </Button>
          </Form>
        </div>
      </main>
    );
  } else {
    return (
      <main className="main">
        <h1 className="title">Search Another</h1>
        <div className="form-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicW3w">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={firstname}
                onChange={(error) => setFirstname(error.target.value)}
                type="firstname"
                name="firstname"
                placeholder="First Name (Capital first letter)"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSearch}>
              Submit
            </Button>
          </Form>
        </div>
        <SearchResult list={data3}></SearchResult>
      </main>
    );
  }
}
