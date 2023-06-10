

import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function GET(request) {
  const client = await db.connect();
  const res = await request.json();
  console.log(`res:`, res);

  const email = res;
  const currentPassword = res.password;

  // Validations here for same password

  // Creates a new user into DB
  const getUser =
    await client.sql`SELECT password FROM users WHERE email = ${email};`;
  console.log(`getUser`, getUser);

  

  return getUser;
}
