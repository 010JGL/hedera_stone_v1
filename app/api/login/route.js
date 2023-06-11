
import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request) {
  const client = await db.connect();
  const res = await request.json();
  console.log(`res:`, res);
  
  const email = res.email;
  const password = res.password;
  console.log(`password:`, password)
  // Validations here for same pasword

  const wrong = {};

  const getUserPassword = await client.sql`SELECT password FROM users WHERE email = ${email};`;
  console.log(`getUserPassword:`, getUserPassword.rows[0].password)

  if (getUserPassword.rows[0].password == password) {

    const sendData = { ...res, success: true };
  
    return NextResponse.json(sendData);
  } else {

    console.log(`Wrong password`)
    return NextResponse.json(wrong);
  }
  

}
