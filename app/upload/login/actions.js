"use client";
import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

    // for the Pop up
    const notify = () =>
    toast.success("You are Signed Up!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

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
  //console.log(`data2:`, data2);
  
};
