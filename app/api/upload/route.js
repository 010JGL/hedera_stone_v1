import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";
import {
  AccountId,
  Client,
  PublicKey,
  TokenCreateTransaction,
  TokenType,
} from "@hashgraph/sdk";

export async function POST(request) {
  const sqlClient = await db.connect();
  const res = await request.json();

  const words = res.words;
  const firstname = res.firstname;
  const middlename = res.middlename;
  const surname = res.surname;
  const datebirth = res.datebirth;
  const datedied = res.datedied;
  const country = res.country;
  const state = res.state;
  const city = res.city;
  const cemeteryname = res.cemeteryname;
  const extras = res.extras;
  const iconUrl = res.iconUrl;
  const tokenId = res.tokenId;
  const metadata = res.metadata;
  // Validations here for same Username

  let success = true;
  const newUpload =
    await sqlClient.sql`INSERT INTO nfts (words, firstname, middlename, surname, datebirth, datedied, country, state, city, cemeteryname, extras, iconUrl, tokenId, metadata) VALUES (${words}, ${firstname}, ${middlename}, ${surname}, ${datebirth}, ${datedied}, ${country}, ${state}, ${city}, ${cemeteryname}, ${extras}, ${iconUrl}, ${tokenId}, ${metadata});`.catch(
      (err) => {
        console.log(err);
        success = false;
      }
    );
  console.log(`newUpload`, newUpload);

  // if (success) {
  //   // create a new NFT
  //   const hederaClient = Client.forTestnet().setOperator(
  //     process.env.HS_TREASURY,
  //     process.env.HS_PRIVATE_KEY
  //   );
  //   const tokenCreateTx = new TokenCreateTransaction()
  //     .setTokenName(`${firstname} ${surname}`)
  //     .setTokenType(TokenType.NonFungibleUnique)
  //     .setTokenSymbol(process.env.HS_SYMBOL)
  //     .setTreasuryAccountId(AccountId.fromString(process.env.HS_TREASURY))
  //     .setSupplyKey(PublicKey.fromString(process.env.HS_PUBLIC_KEY))
  //     .freezeWith(hederaClient);

  //   const tokenCreateSubmit = await tokenCreateTx.execute(hederaClient);
  //   const tokenCreateReceipt = await tokenCreateSubmit.getReceipt(hederaClient);
  //   const tokenId = tokenCreateReceipt.tokenId.toString();
  //   console.log("Token ID: ", tokenId);
  // }

  const sendData = { ...res, success };

  return NextResponse.json(sendData);
}
