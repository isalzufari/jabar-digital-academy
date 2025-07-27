import { sql } from '@vercel/postgres';

export const getProducts = async () => {
  const { rows } = await sql`SELECT * FROM clothing ORDER BY id DESC`;
  return rows;
};

export const addProduct = async (name: string, price: number) => {
  await sql`INSERT INTO clothing (name, price) VALUES (${name}, ${price})`;
};

export const deleteProduct = async (id: number) => {
  await sql`DELETE FROM clothing WHERE id = ${id}`;
};

export const updateProduct = async (
  id: number,
  name: string,
  price: number
) => {
  await sql`
    UPDATE clothing SET name = ${name}, price = ${price} WHERE id = ${id}
  `;
};

export async function getUserByEmail(email: string) {
  const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`;
  return rows[0];
}

export async function createUser({
  name,
  email,
  hashedPassword,
}: {
  name: string;
  email: string;
  hashedPassword: string;
}) {
  await sql`
    INSERT INTO users (fullname, email, password)
    VALUES (${name}, ${email}, ${hashedPassword})
  `;
}
