// Not working, have to manually update DB from Vercel in Storage/Query
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
    description TEXT NOT NULL,
    date TIMESTAMP
    );`;
