import { sql } from "@vercel/postgres";


export default async function Database({ params }) {
  const { rows } = await sql`SELECT * from users;`;

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
    );`;

  const { users } = await sql`DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role TEXT NOT NULL
  );`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}
