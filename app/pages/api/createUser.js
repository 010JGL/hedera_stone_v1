
import { db } from "@vercel/postgres";

export default async function createUser({ data }, response) {
  
  const client = await db.connect();
  console.log(`data:`, data);

  try {
    const username = data.username;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const role = data.role;

    await client.sql`INSERT INTO users (username, name, email, password, role) VALUES (${username}, ${name}, ${email}, ${password}, ${role});`;
    console.log(`newUser:`, newUser);
  } catch (error) {
    return response.status(500).json({ error });
  }

  const usersList = await client.sql`SELECT * FROM users;`;
  return response.status(200).json({ usersList });
}
