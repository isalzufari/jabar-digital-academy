import { sql } from '@vercel/postgres';

export const getProducts = async () => {
  const { rows } = await sql`SELECT * FROM products ORDER BY id DESC`;
  return rows;
};

export const addProduct = async (name: string, price: number) => {
  await sql`INSERT INTO products (name, price) VALUES (${name}, ${price})`;
};

export const deleteProduct = async (id: number) => {
  await sql`DELETE FROM products WHERE id = ${id}`;
};

export const updateProduct = async (
  id: number,
  name: string,
  price: number
) => {
  await sql`
    UPDATE products SET name = ${name}, price = ${price} WHERE id = ${id}
  `;
};
