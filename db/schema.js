import { sql } from "@vercel/postgres";

const { nfts } = await sql`DROP TABLE IF EXISTS nfts CASCADE;
  CREATE TABLE nfts (  
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  threed_image_url VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  creator VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMP
  );`

  
  import { db } from "@vercel/postgres";

const client = await db.connect();
await client.sql`DROP TABLE IF EXISTS nfts CASCADE;`;
await client.sql`CREATE TABLE nfts (
    id SERIAL PRIMARY KEY,
    words VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    middlename VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    datebirth VARCHAR(255) NOT NULL,
    datedied VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    cemeteryname VARCHAR(255) NOT NULL,
    extras VARCHAR(255) NOT NULL,
    date TIMESTAMP
    );`;