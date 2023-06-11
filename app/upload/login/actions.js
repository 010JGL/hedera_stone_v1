import { NextResponse } from "next/server";

export const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  console.log("Do something with this data", data);
  const currentEmail = data.email
  const currentPass = data.password
  console.log(`currentPass:`, currentPass)
  
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

  const data2 = await res.json();
  console.log(`data2:`, data2);

  if (data2.password === currentPass) {
    console.log(`Success login`)

  } else {
    alert(`Wrong password`)
  }

};


