import { NextResponse } from "next/server";
import {
  AccountId,
  TransactionId,
  TransferTransaction,
  PrivateKey,
} from "@hashgraph/sdk";

const HS_PRICE = 100;
const seller = process.env.HS_TREASURY;
const key = process.env.HS_PRIVATE_KEY;

export async function POST(request) {
  console.log("Private key", key);
  const res = await request.json();
  const { tokenId, buyer, serial } = res;

  console.log("Buyer: ", buyer);

  const transaction = await new TransferTransaction()
    .addNftTransfer(tokenId, serial, seller, buyer)
    .addHbarTransfer(buyer, -HS_PRICE)
    .addHbarTransfer(seller, HS_PRICE)
    .setTransactionId(TransactionId.generate(seller))
    .setNodeAccountIds([new AccountId(3)])
    .freeze()
    .sign(PrivateKey.fromString(key));

  const bytes = transaction.toBytes();
  return NextResponse.json({ bytes });
}
