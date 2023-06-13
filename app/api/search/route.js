
import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request) {
  const client = await db.connect();
  const res = await request.json();
  console.log(`res:`, res);
  
  const firstname = res.firstname

  // Validations here for same Username


  // Creates a new user into DB
  const newUser = await client.sql`SELECT * FROM nfts WHERE firstname = ${firstname};`;
  
  const sendData = { ...res, success: true };

  return NextResponse.json(newUser.rows);

}