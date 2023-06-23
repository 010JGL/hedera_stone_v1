import { NextResponse } from "next/server";
import { AccountId, TransactionId, TransferTransaction } from "@hashgraph/sdk";

const HS_PRICE = 100;
const seller = process.env.HS_TREASURY;
const key = process.env.KEY;

export async function POST(request) {
  const res = await request.json();
  const { tokenId, buyer } = res;

  const transaction = await new TransferTransaction()
    .addNftTransfer(tokenId, serial, buyer, seller)
    .addHbarTransfer(buyer, -HS_PRICE)
    .addHbarTransfer(seller, HS_PRICE)
    .setTransactionId(TransactionId.generate(buyer))
    .setNodeAccountIds([new AccountId(3)])
    .freeze()
    .sign(key);

  const bytes = transaction.toBytes();
  return NextResponse.json({ bytes });
}
