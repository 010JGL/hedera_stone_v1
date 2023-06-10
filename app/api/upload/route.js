
import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request) {
  const client = await db.connect();
  const res = await request.json();
  console.log(`res:`, res);

  // Validations here for same Username


  // Creates a new user into DB
  const newUpload = await client.sql`INSERT INTO users (username, name, email, password, role) VALUES (${username}, ${name}, ${email}, ${password}, ${role});`;
  console.log(`newUpload`, newUpload)
  const sendData = { ...res, success: true };

  return NextResponse.json(sendData);

}