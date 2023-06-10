import { GET } from "@/app/api/login/route";
import { NextResponse } from "next/server";

export const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  console.log("Do something with this data", data);

  async function getPassword(email) {
    const res = await fetch("/api/login", {
      method: "GET",
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    console.log(`api/login successful`);
    return res.json();
  }
  getPassword(data.email);
};
