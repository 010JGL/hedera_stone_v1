import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  console.log(`res:`, res);
  const sendData = { ...res, success: true };
  return NextResponse.json(sendData);
}
