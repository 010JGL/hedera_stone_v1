import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request) {
  const client = await db.connect();
  const res = await request.json();

  const username = res.username;
  const name = res.name;
  const email = res.email;
  const password = res.password;
  const role = "basic";

  // Validations here for same Username

  // Creates a new user into DB
  const newUser =
    await client.sql`INSERT INTO users (username, name, email, password, role) VALUES (${username}, ${name}, ${email}, ${password}, ${role});`;

  const sendData = { ...res, success: true };

  return NextResponse.json(sendData);
}
