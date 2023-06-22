'use client'
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SignUp() {
  const [username, setUsername] = useState("jaycool9");
  const [name, setName] = useState("Jay Cool");
  const [email, setEmail] = useState("Jay9@cool.com");
  const [password, setPassword] = useState("123456");
  const [role, setRole] = useState("basic");
  const [message, SetMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validations

    // console.log(`inside handleSubmit`);

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: new Date().toISOString(),
        username,
        name,
        email,
        password,
      }),
    });

    const results = await res.json();
    console.log(results);
    alert(`You have Signed Up`)
  };
  return (
    <main className="main">
      <h1 className="title">Sign up here</h1>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
