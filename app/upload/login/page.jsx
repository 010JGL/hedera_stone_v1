"use client";
import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const notify = () =>
  toast.success("You are logged in!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const currentEmail = data.email;
    const currentPass = data.password;
    //console.log(`currentPass:`, currentPass)

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: currentEmail,
        password: currentPass,
      }),
    });

    // returns an empty object if password doesnt match
    const data2 = await res.json();
    console.log(`data2:`, data2);
    // checks if object empty
    setConfirmation(data2);
    notify();
  };

  if (confirmation.length < 1) {
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
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.defaultValue)}
                defaultValue=""
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </main>
    );
  } else {
    return (
      <main className="main">
        <div className="tempbackground">
          <div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </div>
      </main>
    );
  }
}
