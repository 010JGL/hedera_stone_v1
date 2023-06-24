import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request) {
  const client = await db.connect();
  const res = await request.json();

  const firstname = res.firstname;
  const lastname = res.lastname;
  const datebirth = res.datebirth;
  const datedied = res.datedied;

  // Validations here for same Username

  // Creates a new user into DB
  const searchList =
    await client.sql`SELECT * FROM nfts WHERE firstname IN (${firstname}) AND surname IN (${lastname}) AND datebirth IN (${datebirth}) AND datedied IN (${datedied});`;
  //console.log(`searchList.rows:`, searchList.rows)
  const sendData = { ...res, success: true };

  return NextResponse.json(searchList.rows);
}
