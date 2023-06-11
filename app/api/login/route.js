
import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request) {
  const client = await db.connect();
  const res = await request.json();
  console.log(`res:`, res);
  
  const email = res.email;
  const password = res.password;

  // Validations here for same pasword

  const getUserPassword = await client.sql`SELECT password FROM users WHERE email = ${email};`;
  console.log(`getUserPassword:`, getUserPassword.rows[0].password)

  
  
  const sendData = { ...res, success: true };

  return NextResponse.json(sendData);

}
