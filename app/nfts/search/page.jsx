'use client'

import { useState } from "react";
import { Form } from "react-bootstrap";

import { Button } from "react-bootstrap";


export default function Search() {

  const [firstname, setFirstname] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    // validations

    console.log(`inside handlesearch`);

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
    console.log(`data3:`, data3);
  }

  return (
    <main>
      <h1 className="title">Search</h1>
      <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicW3w">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="firstname"
            name="firstname"
            placeholder="First Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSearch}>
            Submit
          </Button>
      </Form>
      </div>
    </main>
  );
}
