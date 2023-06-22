"use client";
import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { handleSubmit } from "./actions";

export default function Login() {
  // const [email, setEmail] = useState("jay@cool.slm");
  // const [password, setPassword] = useState("hello123");
  
  const [results, setResults] = useState('');

   
  return (
    <main className="main">
      <h1 className="title">Login here</h1>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              // onChange={(e) => setEmail(e.target.value)}
              defaultValue="jay@cool.slm"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              // onChange={(e) => setPassword(e.target.defaultValue)}
              defaultValue="hello123"
            />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}
