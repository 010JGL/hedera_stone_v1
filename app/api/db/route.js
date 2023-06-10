

import { db } from "@vercel/postgres";


const msg = async () => { // async function

  const client = await db.connect();
  await client.sql`DROP TABLE IF EXISTS nfts CASCADE;
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

return (
  <div>db reset</div>
)

};
