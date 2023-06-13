import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request) {
  const client = await db.connect();
  const res = await request.json();
  console.log(`res:`, res);

  const words = res.words;
  const firstname = res.firstname;
  const middlename = res.middlename;
  const surname = res.surname;
  const datebirth = res.datebirth;
  const datedied = res.datedied;
  const country = res.country;
  const city = res.city;
  const cemeteryname = res.cemeteryname;
  const extras = res.extras;

  // Validations here for same Username

  // Creates a new user into DB
  const newUpload =
    await client.sql`INSERT INTO nfts (words, firstname, middlename, surname, datebirth, datedied, country, city, cemeteryname, extras) VALUES (${words}, ${firstname}, ${middlename}, ${surname}, ${datebirth}, ${datedied}, ${country}, ${city}, ${cemeteryname}, ${extras});`;
  console.log(`newUpload`, newUpload);
  const sendData = { ...res, success: true };

  return NextResponse.json(sendData);
}