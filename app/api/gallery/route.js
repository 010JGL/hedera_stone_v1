
import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request) {
  const client = await db.connect();
  const res = await request.json();
  //console.log(`res:`, res);
  
  

  // Validations 


  // Search for nfts
  const nftsList = await client.sql`SELECT * FROM nfts;`;
  console.log(`nftsList.rows:`, nftsList.rows)
  
  const sendData = { ...res, success: true };

  return NextResponse.json(nftsList.rows);

}