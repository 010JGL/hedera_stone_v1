import { sql } from "@vercel/postgres";



// nfts
`DROP TABLE IF EXISTS nfts CASCADE;`;
`CREATE TABLE nfts (
    id SERIAL PRIMARY KEY,
    words VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    middlename VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    datebirth VARCHAR(255) NOT NULL,
    datedied VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    cemeteryname VARCHAR(255) NOT NULL,
    extras VARCHAR(255) NOT NULL,
    iconUrl VARCHAR(255) NOT NULL,
    date TIMESTAMP
    );`;