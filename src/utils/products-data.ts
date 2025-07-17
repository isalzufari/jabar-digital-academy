// utils/products-data.ts
let products = [
  { id: 1, name: 'Kaos Polos', price: 35000 },
  { id: 2, name: 'Hoodie Hitam', price: 120000 },
];

export function getAll() {
  return products;
}

export function getById(id: number) {
  return products.find((p) => p.id === id);
}

export function add(product: { name: string; price: number }) {
  const newProduct = {
    id: Date.now(),
    ...product,
  };
  products.push(newProduct);
  return newProduct;
}

export function update(id: number, data: { name: string; price: number }) {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { id, ...data };
    return products[index];
  }
  return null;
}

export function remove(id: number) {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    const deleted = products.splice(index, 1);
    return deleted[0];
  }
  return null;
}
