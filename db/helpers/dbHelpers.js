import { sql } from '@vercel/postgres';

export default async function createUser({data}) {
  console.log(`data:`, data)
  const username = data.username;
  const name = data.name;
  const email = data.email;
  const password = data.password;
  const role = data.role;

  const newUser = await sql`INSERT INTO users (username, name, email, password, role) VALUES (${username}, ${name}, ${email}, ${password}, ${role});`
  console.log(`newUser:`, newUser)
}